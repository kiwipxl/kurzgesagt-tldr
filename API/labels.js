const path = require('path');
const fs = require('fs');
const youtube = google.youtube('v3');

const CHANNEL_ID = 'UCsXVk37bltHxD1rDPwtNM8Q';

module.exports = () => {
    const youtube = google.youtube('v3');

    const playlistsListRes = await youtube.playlists.list({
        part: ['id', 'snippet'], 
        channelId: CHANNEL_ID
    });

    for (const playlist of playlistsListRes.data.items) {
        console.log('listing playlist items for', playlist.id, playlist.snippet.title);

        const playlistItemsRes = await youtube.playlistItems.list({
            part: ['id', 'snippet'], 
            playlistId: playlist.id, 
            maxResults: 50      // 50 is the maximum
        });

        for (const item of playlistItemsRes.data.items) {
            // TODO: store these in mongodb
            console.log('label:', playlist.snippet.title, 'details:', item.snippet.title, item.snippet.resourceId.videoId);
        }
    }

    throw new Error('no english subtitles found.');
};
