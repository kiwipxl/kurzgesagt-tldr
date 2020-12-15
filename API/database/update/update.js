const database = require('../database');
const sources = require('./sources');
const transcript = require('./transcript');
const misc = require('./misc');

// Generates additional data (called an 'update') for existing data in the database.
// For example, we generate a transcript based on the captions in the database and save it.
// Or we parse sources from a link in the description of a video and save it to the database.
async function update(limit) {
  let videosCursor = database
    .db()
    .collection('video_list')
    .find({})
    .sort({ publishedAt: -1 });

  if (limit > 0) {
    videosCursor = videosCursor.limit(limit);
  }

  for await (const videoInfo of videosCursor) {
    await sources.update(videoInfo.id);
    await transcript.update(videoInfo.id);
    await misc.update(videoInfo.id);
  }
}

module.exports.updateNew = async (limit) => update(limit);
module.exports.updateAll = async () => update();
