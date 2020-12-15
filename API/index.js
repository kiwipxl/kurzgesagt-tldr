const database = require('./database/database');
const database_scrape = require('./database/yt-scrape/scrape');
const database_update = require('./database/update/update');
const auth = require('./auth');
const endpoints = require('./endpoints');
const database_schemas = require('./database/schemas');

// Fetches new videos from Kurzgesagt's youtube channel via the yt-api and
// updates the database accordingly.
async function fetchNewVideos() {
  try {
    // Only fetch videos every so often. This is because the youtube api has a strict
    // API quota, and so we have to add a cooldown.
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

    // First fetch (scrape) the most recent uploaded videos on the channel.
    // Then update the database in case there was a new video.

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
    console.error('error while fetching new videos', err);
  }
}

async function init() {
  try {
    await database.connect();
  } catch (err) {
    console.error('failed to connect to database', err);
  }

  // First apply all schemas in case any schemas have changed.
  database_schemas.applyAll();
  // Then validate. An error will be thrown if this fails and the server will come to a halt.
  database_schemas.validateAll();

  endpoints.start();

  await fetchNewVideos();
}

init();
