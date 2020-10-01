const path = require('path');
const fs = require('fs');
const youtube = google.youtube('v3');

const CHANNEL_ID = 'UCsXVk37bltHxD1rDPwtNM8Q';

module.exports = () => {
    const youtube = google.youtube('v3');

    const captionsListRes = await youtube.captions.list({
        part: ['id', 'snippet'], 
        videoId: videoId
    });
    const captionsList = captionsListRes.data;

    for (const index in captionsList.items) {
        const caption = captionsList.items[index];

        if (caption.snippet.language == 'en') {
            const captionsRes = await youtube.captions.download({
                id: caption.id, 
                tfmt: 'srt'
            });

            return captionsRes.data;
        }
    }

    throw new Error('no english subtitles found.');
};
