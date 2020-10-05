const path = require('path');
const database = require('./database');
const scrape = require('./scrape/scrape');
const auth = require('./auth');

async function init() {
    try {
        // await database.connect();
        // await database.db().collection('scrape_info').updateOne(
        //     {}, 
        //     { $set: { last_scraped_uploaded_video_list: Date.now() } }, 
        //     { upsert: true }
        // );
        // return;

        let google = auth.google();

        await database.connect();

        await scrape(google);

        // TODO: set a timer to continuously scrape every few hours or so
    }
    catch (err) {
        console.error('failed to connect to database', err);
    }
}

init();