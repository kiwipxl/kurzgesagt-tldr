const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();
const port = 7800;

async function getInfo(videoId) {
    return await database.db().collection('video_info').findOne({id: videoId});
}

async function getSources(videoId) {
    return await database.db().collection('sources').findOne({id: videoId});
}

async function getTranscript(videoId) {
    const captions = await database.db().collection('captions').findOne({id: videoId});
    return captions ? captions.transcript : {};
}

async function getTags(videoId) {
    const videoInfo = await database.db().collection('video_info').findOne({id: videoId});
    if (videoInfo) {
        return {
            tags: videoInfo.tags, 
            last_scraped: videoInfo.last_scraped
        };
    }
    return {};
}

async function getPlaylists() {
    let playlists = [];

    const cursor = await database.db().collection('playlists').find({});
    for await (const playlist of cursor) {
        playlists.push(playlist);
    }

    return playlists;
}

module.exports.start = function() {
    app.use(cors());

    app.get('/', async (req, res) => {
        let startAt = parseInt(req.query.startAt) || 0;
        let maxResults = parseInt(req.query.maxResults) || 5;

        const cursor = await database.db().collection('video_info')
            .find({ title: { $exists: true }})  // ensure our database entry is valid
            .sort({ publishedAt: -1 })
            .limit(maxResults)
            .skip(startAt);
        
        let items = [];
        await cursor.forEach(value => {
            items.push(value);
        });

        res.send(items);
    });

    app.get('/video/:videoId', async (req, res) => {
        const videoId = req.params.videoId;

        res.send({
            info: await getInfo(videoId), 
            sources: await getSources(videoId), 
            transcript: await getTranscript(videoId), 
            tags: await getTags(videoId)
        });
    });

    app.get('/video/info/:videoId', async (req, res) => {
        res.send(await getInfo(req.params.videoId));
    });

    app.get('/video/sources/:videoId', async (req, res) => {
        res.send(await getSources(req.params.videoId));
    });

    app.get('/video/transcript/:videoId', async (req, res) => {
        res.send(await getTranscript(req.params.videoId));
    });

    app.get('/video/tags/:videoId', async (req, res) => {
        res.send(await getTags(req.params.videoId));
    });

    app.get('/playlists', async (req, res) => {
        res.send(await getPlaylists());
    });

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}