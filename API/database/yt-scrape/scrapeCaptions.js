const database = require('../database');

// Fetches the english SRT captions/subtitles for a given youtube id and saves it to the database.
//
// NOTE: the yt-api uses a LOT of quota for captions and the free account only has a very limited
// amount. Something to be weary of...
module.exports = async (google, videoId) => {
  const youtube = google.youtube('v3');

  const captionsListRes = await youtube.captions.list({
    part: ['id', 'snippet'],
    videoId: videoId,
  });

  let enSRT;
  for (const caption of captionsListRes.data.items) {
    if (caption.snippet.language == 'en') {
      const captionsRes = await youtube.captions.download({
        id: caption.id,
        tfmt: 'srt',
      });

      enSRT = captionsRes.data;
    }
  }

  if (!enSRT) {
    throw new Error('failed to find english .srt captions track for', videoId);
  }

  await database
    .db()
    .collection('captions')
    .updateOne(
      { id: videoId },
      {
        $set: {
          id: videoId,
          captions: {
            srt: {
              en: enSRT,
            },
          },

          last_scraped: Date.now(),
        },
      },
      { upsert: true }
    );

  console.log(`scraped captions for video ${videoId}`);
};
