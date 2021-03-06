const database = require('../database');

const CHANNEL_ID = 'UCsXVk37bltHxD1rDPwtNM8Q';

// Fetches all playlists on the kurzgesagt youtube channel, and the following playlist items
// for those playlists, and saves it to the database.
module.exports = async (google) => {
  console.log('scraping playlists...');

  const youtube = google.youtube('v3');

  const playlistsListRes = await youtube.playlists.list({
    part: ['id', 'snippet'],
    channelId: CHANNEL_ID,
  });

  for (const playlist of playlistsListRes.data.items) {
    await database
      .db()
      .collection('playlists')
      .updateOne(
        { id: playlist.id },
        {
          $set: {
            id: playlist.id,
            title: playlist.snippet.title,
            publishedAt: playlist.snippet.publishedAt,
            description: playlist.snippet.description,

            thumbnails: {
              defaultUrl: playlist.snippet.thumbnails.default.url,
              mediumUrl: playlist.snippet.thumbnails.medium.url,
              highUrl: playlist.snippet.thumbnails.high.url,
              standardUrl: playlist.snippet.thumbnails.standard.url,
              maxresUrl: playlist.snippet.thumbnails.maxres.url,
            },
          },
        },
        { upsert: true }
      );

    console.log(`scraped playlist items for ${playlist.id}`);

    const playlistItemsRes = await youtube.playlistItems.list({
      part: ['id', 'snippet'],
      playlistId: playlist.id,
      maxResults: 50, // 50 is the maximum
    });

    let playlistVideoIds = [];
    for (const item of playlistItemsRes.data.items) {
      playlistVideoIds.push(item.snippet.resourceId.videoId);
    }

    await database
      .db()
      .collection('playlists')
      .updateOne(
        { id: playlist.id },
        { $set: { last_scraped: Date.now(), videos: playlistVideoIds } },
        { upsert: true }
      );
  }

  await database
    .db()
    .collection('scrape_info')
    .updateOne(
      {},
      {
        $set: { last_scraped_playlists: Date.now() },
      },
      { upsert: true }
    );
};
