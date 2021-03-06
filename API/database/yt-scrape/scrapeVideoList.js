const database = require('../database');
const scrapeVideoInfo = require('./scrapeVideoInfo');

// Youtube uploaded videos are considered a playlist.
// This is kurzgesagt's uploaded videos playlist.
//
// It was found by fetching the Channel with 'contentDetails' to find the
// 'uploads' playlist (channel/contentDetails/relatedPlaylists/uploaded).
const UPLOADED_VIDEOS_PLAYLIST_ID = 'UUsXVk37bltHxD1rDPwtNM8Q';

async function scrapeVideoList(google, pageToken, maxResults) {
  const youtube = google.youtube('v3');

  const playlistItemsRes = await youtube.playlistItems.list({
    part: ['id', 'snippet'],
    maxResults: maxResults,
    pageToken: pageToken,
    playlistId: UPLOADED_VIDEOS_PLAYLIST_ID,
  });

  for (const playlistItem of playlistItemsRes.data.items) {
    const videoId = playlistItem.snippet.resourceId.videoId;

    const video = await database.db().collection('video_list').findOne({
      id: videoId,
    });

    // add new video if it doesn't already exist
    if (!video) {
      console.log('found new video', videoId);

      await database.db().collection('video_list').insertOne({
        id: videoId,
        publishedAt: playlistItem.snippet.publishedAt,
      });

      await scrapeVideoInfo(google, videoId);
    }
  }

  return playlistItemsRes.data.nextPageToken;
}

// Fetches the latest uploaded videos on the Kurzgesagt youtube channel.
// For any new video found, it will be added to the database.
// Set pageLimit to 0 to search through fetch ALL uploaded videos.
module.exports = async function (google, pageLimit) {
  console.log('scraping uploaded videos list...');

  // The maximum number of results yt-api can return.
  const numItemsPerPage = 50;

  let currentPage = 0;
  let nextPageToken = await scrapeVideoList(google, undefined, numItemsPerPage);
  while (nextPageToken) {
    ++currentPage;

    if (pageLimit > 0 && currentPage * numItemsPerPage >= pageLimit) {
      break;
    }

    console.log('scraping all videos list from next page token', nextPageToken);

    nextPageToken = await scrapeVideoList(
      google,
      nextPageToken,
      numItemsPerPage
    );
  }

  await database
    .db()
    .collection('misc')
    .updateOne(
      {},
      {
        $set: { last_scraped_video_list: Date.now() },
      },
      { upsert: true }
    );
};
