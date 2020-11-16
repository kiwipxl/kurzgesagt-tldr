const express = require('express');
const app = express();
const database = require('./database');

const port = 7800;

// TODO: implement prev/next page token

module.exports.start = function() {
    app.get('/', async (req, res) => {
        let maxResults = req.query.maxResults || 5;

        const cursor = await database.db().collection('video_info')
            .find({ title: { $exists: true }})
            .sort({ publishedAt: -1 })
            .limit(maxResults);
        
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