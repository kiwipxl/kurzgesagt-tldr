const request = require('request');
const sources = require('../sources');
const database = require('../database');

const SCRAPE_FREQUENCY_MINUTES = 60;

module.exports = async (videoId, useCooldown = true) => {
    if (useCooldown) {
        const dbSources = await database.db().collection('sources').findOne({ id: videoId });
        
        if (dbSources && dbSources.last_scraped) {
            const timeSinceLastScrape = Date.now() - dbSources.last_scraped;
            if (timeSinceLastScrape < (SCRAPE_FREQUENCY_MINUTES * 60 * 1000)) {
                const cooldownMinutes = Math.round(SCRAPE_FREQUENCY_MINUTES - (timeSinceLastScrape / 60 / 1000));
                console.log('skipping sources scrape. can try again in ' + cooldownMinutes + 'm');
                return;
            }
        }
    }

    const dbVideoInfo = await database.db().collection('video_info').findOne({id: videoId});
    if (!dbVideoInfo) {
        throw new Error('failed to find video id', videoId);
    }

    const pattern = /(http[s]?:\/\/sites\.google[a-zA-Z0-9\-\*\?\=\&\.\/]+)/g;
    const matches = pattern.exec(dbVideoInfo.description);
    if (matches == null) {
        return;
    }

    const url = matches[0];

    await new Promise((resolve, reject) => {
        request(url, async (err, res, body) => {
            if (err) {
                reject(err);
                return;
            }

            const keyPoints = sources.generate(body);

            await database.db().collection('sources').updateOne(
                { id: videoId }, 
                {
                    $set: {
                        url: url, 
                        keyPoints: keyPoints, 
                        last_scraped: Date.now()
                    }
                }, 
                { upsert: true }
            );

            resolve();
        });
    });
};