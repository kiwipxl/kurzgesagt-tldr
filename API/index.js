const database = require('./database');
const scrape = require('./scrape/scrape');
const auth = require('./auth');
const endpoints = require('./endpoints');
const transcript = require('./transcript');

const request = require('request');
const cheerio = require('cheerio');

async function init() {
    // request('https://sites.google.com/view/sources-climate-solve/', (err, res, body) => {
    //     if (err) {
    //         reject(err);
    //         return;
    //     }

    //     let claims = [];
    //     const $ = cheerio.load(body);

    //     $('strong').each((index, element) => {
    //         const text = $(element).parent().text();

    //         if (text.startsWith('–') || text.startsWith('–')) {
    //             claims.push({
    //                 title: text
    //             });
    //         }
    //     });

    //     console.log(claims);
    // });

    // return;

    try {
        await database.connect();
    }
    catch (err) {
        console.error('failed to connect to database', err);
    }

    // await transcript.regenerateDatabase();
    
    endpoints.start();

    // TODO: set a timer to continuously scrape every few hours or so
    // await scrape(auth.google());
}

init();