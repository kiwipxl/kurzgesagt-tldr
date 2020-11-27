const database = require('./database');
const scrape = require('./scrape/scrape');
const auth = require('./auth');
const endpoints = require('./endpoints');
const transcript = require('./transcript');

async function init() {
    try {
        await database.connect();
    }
    catch (err) {
        console.error('failed to connect to database', err);
    }

    await transcript.regenerateDatabase();
    
    endpoints.start();

    // TODO: set a timer to continuously scrape every few hours or so
    // await scrape(auth.google());
}

init();