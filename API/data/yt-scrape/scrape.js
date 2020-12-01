const scrape_video_info = require('./scrape_video_info');
const scrape_video_list = require('./scrape_video_list');
const scrape_captions = require('./scrape_captions');
const scrape_playlists = require('./scrape_playlists');
const database = require('../../database');

module.exports = async (google) => {
    try {
        await scrape_video_list(google);

        const videosCursor = database.db().collection('video_info')
            .find({})
            .sort({publishedAt: -1});
            
        for await (const videoInfo of videosCursor) {
            await scrape_video_info(google, videoInfo.id);
            // await scrape_captions(google, videoInfo.id);
        }
        
        await scrape_playlists(google);
    }
    catch (err) {
        if (err.errors && err.errors[0].reason == 'quotaExceeded') {
            console.error('scrape failed: youtube api quota exceeded. try again in 24h');
        }else {
            console.error('scrape failed', err);
        }
    }
};
