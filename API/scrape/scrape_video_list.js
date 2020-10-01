const path = require('path');
const fs = require('fs');

/*
Adds uploaded videos to the database.

videos:
[
    {
        id: 'videoid1'
    }, 
    {
        id: 'videoid2'
    }
]
*/

// This was found by fetching the Channel with 'contentDetails' to find the
// 'uploads' playlist (channel/contentDetails/relatedPlaylists/uploaded).
const UPLOADED_VIDEOS_PLAYLIST_ID = 'UUsXVk37bltHxD1rDPwtNM8Q';

async function scrapeVideoList(google, pageToken) {
    // TODO: check for last_updated before processing
    
    const youtube = google.youtube('v3');

    console.log('fetching videos on', pageToken, '...');

    const playlistItemsRes = await youtube.playlistItems.list({
        part: ['id', 'snippet'], 
        maxResults: maxResults, 
        pageToken: pageToken, 
        playlistId: UPLOADED_VIDEOS_PLAYLIST_ID
    });

    for (const playlistItem of playlistItemsRes.data.items) {
        console.log(playlistItem.snippet.title, playlistItem.snippet.thumbnails.maxres.url);
    }

    if (playlistItemsRes.nextPageToken) {
        await scrapeVideoList(google, playlistItemsRes.nextPageToken);
    }

    console.log('processing videos complete.');
}

module.exports = async (google) => {
    await scrapeVideoList(google);
};
