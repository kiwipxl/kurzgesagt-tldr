const database = require('../database');

// Youtube uploaded videos are considered a playlist.
// This is kurzgesagt's uploaded videos playlist.
//
// It was found by fetching the Channel with 'contentDetails' to find the
// 'uploads' playlist (channel/contentDetails/relatedPlaylists/uploaded).
const UPLOADED_VIDEOS_PLAYLIST_ID = 'UUsXVk37bltHxD1rDPwtNM8Q';

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

module.exports = async function(google, pageLimit) {
    console.log('scraping uploaded videos list...');

    // the maximum number of results youtube can return
    const numItemsPerPage = 50;

    let currentPage = 0;
    let nextPageToken = await scrapeVideoList(google, undefined, numItemsPerPage);
    while (nextPageToken) {
        ++currentPage;

        if (pageLimit > 0 && (currentPage * numItemsPerPage) >= pageLimit) {
            break;
        }

        console.log('scraping all videos list from next page token', nextPageToken);

        nextPageToken = await scrapeVideoList(google, nextPageToken, numItemsPerPage);
    }

    await database.db().collection('scrape_info').updateOne(
        {}, 
        {
            $set: { last_scraped_video_list: Date.now() }
        }, 
        { upsert: true }
    );
};
