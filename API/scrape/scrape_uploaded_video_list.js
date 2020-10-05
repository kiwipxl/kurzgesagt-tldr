const database = require('../database');

// This was found by fetching the Channel with 'contentDetails' to find the
// 'uploads' playlist (channel/contentDetails/relatedPlaylists/uploaded).
const UPLOADED_VIDEOS_PLAYLIST_ID = 'UUsXVk37bltHxD1rDPwtNM8Q';

const SCRAPE_FREQUENCY_MINUTES = 10;

async function scrapeVideoList(google, pageToken) {
    const youtube = google.youtube('v3');

    console.log('scraping uploaded videos list. (page token', pageToken, ')');

    const playlistItemsRes = await youtube.playlistItems.list({
        part: ['id', 'snippet'], 
        maxResults: 50, 
        pageToken: pageToken, 
        playlistId: UPLOADED_VIDEOS_PLAYLIST_ID
    });
    
    for (const playlistItem of playlistItemsRes.data.items) {
        const videoId = playlistItem.snippet.resourceId.videoId;

        const videoInfo = await database.db().collection('video_info').findOne({
            id: videoId
        });

        if (!videoInfo) {
            await database.db().collection('video_info').insertOne({
                id: videoId
            });

            console.log('scraped uploaded video id', videoId);
        }
    }

    await database.db().collection('scrape_info').updateOne(
        {}, 
        {
            $set: { last_scraped_uploaded_video_list: Date.now() }
        }, 
        { upsert: true }
    );

    return playlistItemsRes.nextPageToken;
}

module.exports = async (google) => {
    const scrapeInfo = await database.db().collection('scrape_info').findOne();
    if (scrapeInfo && scrapeInfo.last_scraped_uploaded_video_list) {
        const timeSinceLastScrape = Date.now() - scrapeInfo.last_scraped_uploaded_video_list;
        if (timeSinceLastScrape < (SCRAPE_FREQUENCY_MINUTES * 60 * 1000)) {
            const cooldownMinutes = Math.round(SCRAPE_FREQUENCY_MINUTES - (timeSinceLastScrape / 60 / 1000));
            console.log('skipping uploaded video list scrape. can try again in ' + cooldownMinutes + 'm');
            return;
        }
    }

    await scrapeVideoList(google);

    // TODO: recursive scrape with next page token
};
