const database = require('../database');
const sources = require('./sources');
const transcript = require('./transcript');
const misc = require('./misc');

async function update(limit) {
    let videosCursor = database.db().collection('video_info')
        .find({})
        .sort({publishedAt: -1})
    
    if (limit > 0) {
        videosCursor = videosCursor.limit(limit);
    }

    for await (const videoInfo of videosCursor) {
        await sources.update(videoInfo.id);
        await transcript.update(videoInfo.id);
        await misc.update(videoInfo.id);
    }
};

module.exports.updateNew = async (limit) => update(limit);
module.exports.updateAll = async () => update();