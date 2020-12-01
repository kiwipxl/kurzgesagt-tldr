const database = require('./database');
const scrape = require('./data/yt-scrape/scrape');
const auth = require('./auth');
const endpoints = require('./endpoints');
const update_db = require('./data/update_db');

async function init() {
    try {
        await database.connect();
    }
    catch (err) {
        console.error('failed to connect to database', err);
    }

    await update_db();
    // TODO: set a timer to continuously scrape every few hours or so
    // await scrape(auth.google());

    // endpoints.start();
}

init();