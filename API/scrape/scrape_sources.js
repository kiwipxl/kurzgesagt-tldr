const request = require('request');
const cheerio = require('cheerio');

const SCRAPE_FREQUENCY_MINUTES = 60;

module.exports = async (videoId) => {
    const dbSources = await database.db().collection('sources').findOne({ id: videoId });
    
    if (dbSources && dbSources.last_scraped) {
        const timeSinceLastScrape = Date.now() - dbSources.last_scraped;
        if (timeSinceLastScrape < (SCRAPE_FREQUENCY_MINUTES * 60 * 1000)) {
            const cooldownMinutes = Math.round(SCRAPE_FREQUENCY_MINUTES - (timeSinceLastScrape / 60 / 1000));
            console.log('skipping uploaded video list scrape. can try again in ' + cooldownMinutes + 'm');
            return;
        }
    }

    return new Promise((resolve, reject) => {
        request('https://sites.google.com/view/sourcesclimateresponsibility', (err, res, body) => {
            if (err) {
                reject(err);
                return;
            }

            let claims = [];
            const $ = cheerio.load(body);

            $('strong').each((index, element) => {
                const text = $(element).parent().text();

                if (text.startsWith('–') || text.startsWith('–')) {
                    claims.append({
                        title: text
                    });
                }
            });

            resolve(claims);
        });
    });
};