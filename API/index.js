const database = require('./database/database');
const database_scrape = require('./database/yt-scrape/scrape');
const database_update = require('./database/update/update');
const auth = require('./auth');
const endpoints = require('./endpoints');

async function fetchNewVideos() {
  try {
    console.log('scraping...');
    await database_scrape.scrapeNew(auth.google(), 5);

    console.log('updating database...');
    await database_update.updateNew(5);

    await database
      .db()
      .collection('misc')
      .updateOne(
        {},
        {
          $set: { last_fetched_new_videos: Date.now() },
        },
        { upsert: true }
      );

    console.log('new videos fetched successfully.');
  } catch (err) {
    console.error('failed to fetch new videos', err);
  }
}

async function init() {
  try {
    await database.connect();
  } catch (err) {
    console.error('failed to connect to database', err);
  }

  endpoints.start();

  await fetchNewVideos();
}

init();
