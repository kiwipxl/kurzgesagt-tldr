const scrapeVideoInfo = require('./scrapeVideoInfo');
const scrapeVideoList = require('./scrapeVideoList');
const scrapeCaptions = require('./scrapeCaptions');
const scrapePlaylists = require('./scrapePlaylists');
const database = require('../database');

// Fetches new uploaded videos from kurzgesagt's youtube channel and saves it to the database.
module.exports.scrapeNew = async (google, limit) => {
  await scrapeVideoList(google, 1);

  const videosCursor = database
    .db()
    .collection('video_info')
    .find({})
    .sort({ publishedAt: -1 })
    .limit(limit);

  for await (const videoInfo of videosCursor) {
    await scrapeVideoInfo(google, videoInfo.id);
  }
};

// Fetches every single uploaded video from kurzgesagt's youtube channel and saves it to
// the database.
// Useful when we're populating our database from scratch again.
module.exports.scrapeAll = async (google) => {
  await scrapeVideoList(google);

  const videosCursor = database
    .db()
    .collection('video_info')
    .find({})
    .sort({ publishedAt: -1 });

  for await (const videoInfo of videosCursor) {
    await scrapeVideoInfo(google, videoInfo.id);

    // Captions take a LOT of the daily yt-api quota, so we'll very quickly run
    // out of quota with this uncommented. Captions aren't super important, so let's
    // comment it out for now.
    // await scrapeCaptions(google, videoInfo.id);
  }

  await scrapePlaylists(google);
};
