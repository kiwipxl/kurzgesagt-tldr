const path = require('path');
const fs = require('fs');
const youtube = google.youtube('v3');

const UPLOADED_VIDEOS_PLAYLIST_ID = 'UUsXVk37bltHxD1rDPwtNM8Q';

async function processVideos(pageToken) {
    const youtube = google.youtube('v3');

    console.log('fetching videos on', pageToken, '...');

    const playlistItemsRes = await youtube.playlistItems.list({
        part: ['id', 'snippet'], 
        maxResults: 25, 
        pageToken: pageToken, 
        playlistId: UPLOADED_VIDEOS_PLAYLIST_ID
    });

    for (const playlistItem of playlistItemsRes.data.items) {
        console.log(playlistItem.snippet.title, playlistItem.snippet.thumbnails.maxres.url);
    }

    if (playlistItemsRes.nextPageToken) {
        await processVideos(playlistItemsRes.nextPageToken);
    }

    console.log('processing videos complete.');
}

module.exports = async () => {
    await processVideos(undefined);
};
