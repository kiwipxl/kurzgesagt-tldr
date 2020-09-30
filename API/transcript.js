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

function downloadSubtitleTrack(google, videoId) {
    return new Promise((resolve, reject) => {
        const youtube = google.youtube('v3');

        youtube.captions.list({
            part: ['id', 'snippet'], 
            videoId: videoId
        }).then(captionsRes => {
            const captions = captionsRes.data;
            let found = false;

            for (const index in captions.items) {
                const caption = captions.items[index];

                if (caption.snippet.language == 'en') {
                    found = true;

                    youtube.captions.download({
                        id: caption.id, 
                        tfmt: 'srt'
                    }).then(res => resolve(res.data))
                    .catch(reject);
                }
            }

            if (!found) {
                reject(new Error('no english subtitles found.'));
            }
        }).catch(reject);
    });
}
