const path = require('path');
const fs = require('fs');
const { parseSync, stringifySync } = require('subtitle');

function generateTranscript() {
    let transcript = '';

    let captions = parseSync(srtString);
    for (const caption of captions) {
        transcript += caption.data.text + ' ';
    }

    transcript = transcript.replace(/\n/g, ' ');
    transcript = transcript.replace(/\.^ /g, '. ');

    return transcript;
}

module.exports = async (google, videoId) => {
    let srtString = loadCaptionsTrack(videoId);
    if (!srtString) {
        srtString = await downloadCaptionsTrack(google, videoId);
        await fs.writeFile(getCaptionsPath(videoId));
    }

    let transcript = '';

    let captions = parseSync(srtString);
    for (const caption of captions) {
        transcript += caption.data.text + ' ';
    }

    transcript = transcript.replace(/\n/g, ' ');
    transcript = transcript.replace(/\.^ /g, '. ');

    return transcript;
};

function getCaptionsPath(videoId) {
    return path.combine(__dirname, './' + videoId + '/captions.srt');
}

function loadCaptionsTrack(videoId) {
    return fs.readFileSync(getCaptionsPath(videoId), 'utf8');
}

async function downloadCaptionsTrack(google, videoId) {
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

    throw new Error('no english captions track found.');
}
