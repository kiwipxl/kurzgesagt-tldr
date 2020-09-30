const request = require('request');
const cheerio = require('cheerio');

module.exports = (videoId) => {
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