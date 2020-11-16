const database = require('./database');
const scrape = require('./scrape/scrape');
const auth = require('./auth');
const endpoints = require('./endpoints');

async function init() {
    try {
        await database.connect();
    }
    catch (err) {
        console.error('failed to connect to database', err);
    }
    
    endpoints.start();

    // TODO: set a timer to continuously scrape every few hours or so
    // await scrape(auth.google());
}

init();