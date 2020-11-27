const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();
const port = 7800;

module.exports.start = function() {
    app.use(cors());

    app.get('/', async (req, res) => {
        let startAt = parseInt(req.query.startAt) || 0;
        let maxResults = parseInt(req.query.maxResults) || 5;

        const cursor = await database.db().collection('video_info')
            .find({ title: { $exists: true }})
            .sort({ publishedAt: -1 })
            .limit(maxResults)
            .skip(startAt);
        
        let items = [];
        await cursor.forEach(value => {
            items.push(value);
        });

        res.send(items);
    });

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}