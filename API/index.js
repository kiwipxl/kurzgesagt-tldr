const database = require('./database/database');
const database_scrape = require('./database/yt-scrape/scrape');
const database_update = require('./database/update/update');
const auth = require('./auth');
const endpoints = require('./endpoints');
const database_schemas = require('./database/schemas');

async function fetchNewVideos() {
  try {
    const fetchCooldownInMinutes = 120;

    const misc = await database.db().collection('misc').findOne();
    if (misc && misc.last_fetched_new_videos) {
      const timeSinceLastScrape = Date.now() - misc.last_fetched_new_videos;

      if (timeSinceLastScrape < fetchCooldownInMinutes * 60 * 1000) {
        const cooldownMinutes = Math.round(
          fetchCooldownInMinutes - timeSinceLastScrape / 60 / 1000
        );

        console.log(
          'skipping fetching new videos. can try again in ' +
            cooldownMinutes +
            'm'
        );
        return;
      }
    }

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

  // endpoints.start();

  // await fetchNewVideos();

  database_schemas.applyAll();
  database_schemas.validateAll();

  console.log('done');
}

init();
