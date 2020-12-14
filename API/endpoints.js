const express = require('express');
const cors = require('cors');
const database = require('./database/database');

const app = express();
const port = 7800;

async function getInfo(videoId) {
  return await database.db().collection('video_info').findOne({ id: videoId });
}

async function getSources(videoId) {
  return await database.db().collection('sources').findOne({ id: videoId });
}

async function getTranscript(videoId) {
  const captions = await database
    .db()
    .collection('captions')
    .findOne({ id: videoId });

  if (captions && captions.transcript) {
    return captions.transcript;
  }
  return null;
}

async function getTags(videoId) {
  const videoInfo = await database
    .db()
    .collection('video_info')
    .findOne({ id: videoId });

  if (videoInfo && videoInfo.tags) {
    return {
      tags: videoInfo.tags,
      last_scraped: videoInfo.last_scraped,
    };
  }
  return null;
}

async function getPlaylists() {
  let playlists = [];

  const cursor = await database.db().collection('playlists').find({});
  for await (const playlist of cursor) {
    playlists.push(playlist);
  }

  return playlists;
}

module.exports.start = function () {
  app.use(cors());

  app.get('/', async (req, res) => {
    let startAt = parseInt(req.query.startAt) || 0;
    let maxResults = parseInt(req.query.maxResults) || 5;

    const cursor = await database
      .db()
      .collection('video_info')
      .find({})
      .sort({ publishedAt: -1 })
      .limit(maxResults)
      .skip(startAt);

    let items = [];
    await cursor.forEach((value) => {
      items.push(value);
    });

    res.send(items);
  });

  app.get('/video/:videoId', async (req, res) => {
    const videoId = req.params.videoId;

    let result = {};

    const info = await getInfo(videoId);
    if (info) {
      result.info = info;
    } else {
      res.status(404).send('Not found');
      return;
    }

    const sources = await getSources(videoId);
    if (sources) {
      result.sources = sources;
    }

    const transcript = await getTranscript(videoId);
    if (transcript) {
      result.transcript = transcript;
    }

    const tags = await getTags(videoId);
    if (tags) {
      result.tags = tags;
    }

    res.send(result);
  });

  app.get('/video/info/:videoId', async (req, res) => {
    const info = await getInfo(req.params.videoId);
    if (info) {
      res.send(info);
    } else {
      res.status(404).send('Not found');
    }
  });

  app.get('/video/sources/:videoId', async (req, res) => {
    const sources = await getSources(req.params.videoId);
    if (sources) {
      res.send(sources);
    } else {
      res.status(404).send('Not found');
    }
  });

  app.get('/video/transcript/:videoId', async (req, res) => {
    const transcript = await getTranscript(req.params.videoId);
    if (transcript) {
      res.send(transcript);
    } else {
      res.status(404).send('Not found');
    }
  });

  app.get('/video/tags/:videoId', async (req, res) => {
    const tags = await getTags(req.params.videoId);
    if (tags) {
      res.send(tags);
    } else {
      res.status(404).send('Not found');
    }
  });

  app.get('/playlists', async (req, res) => {
    res.send(await getPlaylists());
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};
