const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');
const fs = require('fs');
const { parseSync, stringifySync } = require('subtitle');

const youtube = google.youtube('v3');

function googleAuthenticate() {
    return new Promise((resolve, reject) => {
        authenticate({
            keyfilePath: path.join(__dirname, './credentials.json'), 
            scopes: ['https://www.googleapis.com/auth/youtube.force-ssl']
        }).then(auth => {
            google.options({auth});
            resolve(auth);
        }).catch(err => {
            console.error(err);
            reject(err);
        });
    });
}

generateTranscript('rhFK5_Nx9xY');

async function generateTranscript(videoId) {
    let srtString = loadSubtitleTrack(videoId);
    if (!srtString) {
        srtString = await downloadSubtitleTrack('rhFK5_Nx9xY');
        await fs.writeFile('./' + videoId + 'captions.srt');
    }

    let transcript = '';

    let subtitles = parseSync(srtString);
    for (const index in subtitles) {
        const subtitle = subtitles[index];
        transcript += subtitle.data.text + ' ';
    }

    transcript = transcript.replace(/\n/g, ' ');
    transcript = transcript.replace(/\.^ /g, '. ');
    
    console.log(transcript);
}

function loadSubtitleTrack(videoId) {
    return fs.readFileSync('./' + videoId + '/captions.srt', 'utf8');
}

function downloadSubtitleTrack(videoId) {
    return new Promise((resolve, reject) => {
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
return;

request('https://sites.google.com/view/sourcesclimateresponsibility', (err, res, body) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('parsing...');

    const $ = cheerio.load(body);

    $('strong').each((index, element) => {
        const text = $(element).parent().text();

        if (text.startsWith('–') || text.startsWith('–')) {
            console.log(text);
        }
    });
});