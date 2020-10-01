const scrape_videos = require('./scrape_videos');
const scrape_video_list = require('./scrape_video_list');
const scrape_transcript = require('./scrape_transcript');
const scrape_sources = require('./scrape_sources');
const scrape_labels = require('./scrape_labels');

module.exports = async () => {
    try {
        await scrape_video_list(google);

        // TODO: then, for every video:
        for (const videoId of []) {
            await scrape_sources(videoId);
            await scrape_video_info(videoId);
            await scrape_transcript(google, videoId);
        }
    }
    catch (err) {
        console.error(err);
    }
};
