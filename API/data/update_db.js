const database = require('../database');
const sources = require('./sources');
const transcript = require('./transcript');
const yt_post_process = require('./yt_post_process');

module.exports = async () => {
    try {
        const videosCursor = database.db().collection('video_info').find({});
        for await (const videoInfo of videosCursor) {
            await sources.updateDB(videoInfo.id);
            await transcript.updateDB(videoInfo.id);
            await yt_post_process.updateDB(videoInfo.id);
        }
    }
    catch (err) {
        console.error('update failed', err);
    }
};
