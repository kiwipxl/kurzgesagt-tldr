const { parseSync, stringifySync } = require('subtitle');
const database = require('../database');

const SCRAPE_FREQ = [
    {
        daysAgoPublished: 6, 
        freqMinutes: 60 * 24
    }, 
    {
        daysAgoPublished: 30, 
        freqMinutes: 60 * 24 * 3
    }, 
    {
        daysAgoPublished: 30 * 6, 
        freqMinutes: 60 * 24 * 12
    }, 
    {
        daysAgoPublished: 30 * 18, 
        freqMinutes: 60 * 24 * 30
    }
];

module.exports = async (google, videoId) => {
    const dbCaptions = await database.db().collection('captions').findOne({id: videoId});

    if (dbCaptions && dbCaptions.last_scraped) {
        const timeSinceLastScrape = Date.now() - dbCaptions.last_scraped;
        if (timeSinceLastScrape < (SCRAPE_FREQ_MINUTES * 60 * 1000)) {
            const cooldownMinutes = Math.round(SCRAPE_FREQ_MINUTES - (timeSinceLastScrape / 60 / 1000));
            console.log('skipping captions scrape for ' + videoId + '. can try again in ' + cooldownMinutes + 'm');
            return;
        }
    }

    console.log('scraping captions for', videoId);

    const youtube = google.youtube('v3');

    const captionsListRes = await youtube.captions.list({
        part: ['id', 'snippet'], 
        videoId: videoId
    });

    let enSRT;
    for (const caption of captionsListRes.data.items) {
        if (caption.snippet.language == 'en') {
            const captionsRes = await youtube.captions.download({
                id: caption.id, 
                tfmt: 'srt'
            });

            enSRT = captionsRes.data;
        }
    }

    if (!enSRT) {
        throw new Error('failed to find english .srt captions track for', videoId);
    }

    const transcript = generateTranscript(enSRT);

    await database.db().collection('captions').updateOne(
        { id: videoId }, 
        {
            $set: {
                id: videoId, 
                captions: {
                    srt: {
                        en: enSRT
                    }
                }, 
                transcript: transcript, 
                last_scraped: Date.now()
            }
        }, 
        { upsert: true }
    );
};

function generateTranscript(srt) {
    let transcript = '';

    let captions = parseSync(srt);
    for (const caption of captions) {
        transcript += caption.data.text + ' ';
    }

    transcript = transcript.replace(/\n/g, ' ');
    transcript = transcript.replace(/\.^ /g, '. ');

    return transcript;
}
