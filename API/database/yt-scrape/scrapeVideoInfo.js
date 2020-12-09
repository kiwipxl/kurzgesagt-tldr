const database = require('../database');

// Fetches the video info (description, duration, etc) for a given youtube video, and
// then saves it to the database.
module.exports = async (google, videoId) => {
  const youtube = google.youtube('v3');

  const videoInfoRes = await youtube.videos.list({
    part: ['snippet', 'contentDetails', 'statistics'],
    id: videoId,
  });

  const videoInfo = videoInfoRes.data.items[0];
  const thumbnails = videoInfo.snippet.thumbnails;

  await database
    .db()
    .collection('video_info')
    .updateOne(
      { id: videoId },
      {
        $set: {
          title: videoInfo.snippet.title,
          description: videoInfo.snippet.description,
          publishedAt: videoInfo.snippet.publishedAt,

          duration: videoInfo.contentDetails.duration,
          numViews: parseInt(videoInfo.statistics.viewCount),
          numLikes: parseInt(videoInfo.statistics.likeCount),
          numDislikes: parseInt(videoInfo.statistics.dislikeCount),
          numComments: parseInt(videoInfo.statistics.commentCount),

          thumbnails: {
            defaultUrl: thumbnails.default ? thumbnails.default.url : undefined,
            mediumUrl: thumbnails ? thumbnails.medium.url : undefined,
            highUrl: thumbnails.high ? thumbnails.high.url : undefined,
            standardUrl: thumbnails.standard
              ? thumbnails.standard.url
              : undefined,
            maxresUrl: thumbnails.maxres ? thumbnails.maxres.url : undefined,
          },

          tags: videoInfo.snippet.tags,

          last_scraped: Date.now(),
        },
      },
      { upsert: true }
    );

  console.log(`scraped video info for video ${videoId}`);
};
