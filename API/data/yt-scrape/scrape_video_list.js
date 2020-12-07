const database = require('../../database');

// This was found by fetching the Channel with 'contentDetails' to find the
// 'uploads' playlist (channel/contentDetails/relatedPlaylists/uploaded).
const UPLOADED_VIDEOS_PLAYLIST_ID = 'UUsXVk37bltHxD1rDPwtNM8Q';

const SCRAPE_NEW_VIDEOS_FREQ_MINUTES = 60;
const SCRAPE_ALL_VIDEOS_FREQ_MINUTES = 60 * 24 * 5;

async function scrapeVideoList(google, pageToken, maxResults) {
    const youtube = google.youtube('v3');
    
    const playlistItemsRes = await youtube.playlistItems.list({
        part: ['id', 'snippet'], 
        maxResults: maxResults, 
        pageToken: pageToken, 
        playlistId: UPLOADED_VIDEOS_PLAYLIST_ID
    });
    
    for (const playlistItem of playlistItemsRes.data.items) {
        const videoId = playlistItem.snippet.resourceId.videoId;

        const videoInfo = await database.db().collection('video_info').findOne({
            id: videoId
        });

        // add new video if it doesn't already exist
        if (!videoInfo || !videoInfo.title) {
            await database.db().collection('video_info').insertOne({
                id: videoId
            });

            console.log('found new video', videoId);
        }
    }

    return playlistItemsRes.data.nextPageToken;
}

async function scrapeNewVideos(google, useCooldown = true) {
    if (useCooldown) {
        const scrapeInfo = await database.db().collection('scrape_info').findOne();
        if (scrapeInfo && scrapeInfo.last_scraped_new_videos_list) {
            const timeSinceLastScrape = Date.now() - scrapeInfo.last_scraped_new_videos_list;
            if (timeSinceLastScrape < (SCRAPE_NEW_VIDEOS_FREQ_MINUTES * 60 * 1000)) {
                const cooldownMinutes = Math.round(SCRAPE_NEW_VIDEOS_FREQ_MINUTES - (timeSinceLastScrape / 60 / 1000));
                console.log('skipping new videos list scrape. can try again in ' + cooldownMinutes + 'm');
                return;
            }
        }
    }

    console.log('scraping new uploaded videos list...');

    await scrapeVideoList(google, undefined, 5);

    await database.db().collection('scrape_info').updateOne(
        {}, 
        {
            $set: { last_scraped_new_videos_list: Date.now() }
        }, 
        { upsert: true }
    );
};

async function scrapeAllVideos(google, useCooldown = true) {
    if (useCooldown) {
        const scrapeInfo = await database.db().collection('scrape_info').findOne();
        if (scrapeInfo && scrapeInfo.last_scraped_all_videos_list) {
            const timeSinceLastScrape = Date.now() - scrapeInfo.last_scraped_all_videos_list;
            if (timeSinceLastScrape < (SCRAPE_ALL_VIDEOS_FREQ_MINUTES * 60 * 1000)) {
                const cooldownMinutes = Math.round(SCRAPE_ALL_VIDEOS_FREQ_MINUTES - (timeSinceLastScrape / 60 / 1000));
                console.log('skipping all videos list scrape. can try again in ' + cooldownMinutes + 'm');
                return;
            }
        }
    }

    console.log('scraping all uploaded videos list...');

    let nextPageToken = await scrapeVideoList(google, undefined, 50);
    while (nextPageToken) {
        console.log('scraping all videos list from next page token', nextPageToken);

        nextPageToken = await scrapeVideoList(google, nextPageToken, 50);
    }

    await database.db().collection('scrape_info').updateOne(
        {}, 
        {
            $set: { last_scraped_all_videos_list: Date.now() }
        }, 
        { upsert: true }
    );
};

module.exports = async (google) => {
    await scrapeNewVideos(google);
    await scrapeAllVideos(google);
};
