const path = require('path');
const fs = require('fs');
const { parseSync, stringifySync } = require('subtitle');

module.exports = async (google, videoId) => {
    let srtString = loadSubtitleTrack(videoId);
    if (!srtString) {
        srtString = await downloadSubtitleTrack(google, videoId);
        await fs.writeFile(getSubtitlePath(videoId));
    }

    let transcript = '';

    let subtitles = parseSync(srtString);
    for (const index in subtitles) {
        const subtitle = subtitles[index];
        transcript += subtitle.data.text + ' ';
    }

    transcript = transcript.replace(/\n/g, ' ');
    transcript = transcript.replace(/\.^ /g, '. ');

    return transcript;
};

function getSubtitlePath(videoId) {
    return path.combine(__dirname, './' + videoId + '/captions.srt');
}

function loadSubtitleTrack(videoId) {
    return fs.readFileSync(getSubtitlePath(videoId), 'utf8');
}

async function downloadSubtitleTrack(google, videoId) {
    const youtube = google.youtube('v3');

    const captionsListRes = await youtube.captions.list({
        part: ['id', 'snippet'], 
        videoId: videoId
    });
    
    for (const caption of captionsListRes.data.items) {
        if (caption.snippet.language == 'en') {
            const captionsRes = await youtube.captions.download({
                id: caption.id, 
                tfmt: 'srt'
            });

            return captionsRes.data;
        }
    }

    throw new Error('no english subtitles found.');
}
