const { parseSync, stringifySync } = require('subtitle');
const moment = require('moment');
const database = require('../database');
const util = require('./util');

const SCRAPE_FREQ_INFO = [
    {
        daysAgoPublished: { start: 0, end: 7 }, 
        freqInHours: { start: 12, end: 24 }
    }, 
    {
        daysAgoPublished: { start: 7, end: 30 }, 
        freqInHours: { start: 24, end: 24 * 3 }
    }, 
    {
        daysAgoPublished: { start: 30, end: 30 * 6 }, 
        freqInHours: { start: 24 * 3, end: 24 * 12 }
    }, 
    {
        daysAgoPublished: { start: 30 * 6, end: 30 * 24 }, 
        freqInHours: { start: 24 * 12, end: 24 * 24 }
    }, 
    {
        daysAgoPublished: { start: 30 * 24, end: 30 * 12 * 100 }, 
        freqInHours: { start: 24 * 24, end: 24 * 30 }
    }
];

module.exports = async (google, videoId) => {
    const dbVideoInfo = await database.db().collection('video_info').findOne({ id: videoId });
    if (!dbVideoInfo) {
        throw new Error('failed to find video id', videoId);
    }
    
    const dbCaptions = await database.db().collection('captions').findOne({ id: videoId });
    if (dbCaptions) {
        const daysAgoPublished = moment().diff(moment(dbVideoInfo.publishedAt), 'days');
        const remainingHoursUntilScrape = util.getRemainingHoursUntilScrape(SCRAPE_FREQ_INFO, daysAgoPublished, dbCaptions.last_scraped);

        if (remainingHoursUntilScrape > 0) {
            console.log('skipping captions scrape for ' + videoId + '. try again ' + moment().add(remainingHoursUntilScrape, 'hours').fromNow());
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
