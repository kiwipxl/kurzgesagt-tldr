const scrape_video_info = require('./scrape_video_info');
const scrape_video_list = require('./scrape_video_list');
const scrape_captions = require('./scrape_captions');
const scrape_sources = require('./scrape_sources');
const scrape_playlists = require('./scrape_playlists');
const database = require('../database');

/*
Database model.

video_info: [
    {
        videoId: String, 
        publishedAt: DateTime, 
        title: String, 
        description: String, 
        duration: String, 
        numViews: Number, 
        numLikes: Number, 
        numDislikes: Number, 
        numComments: Number, 
        
        thumbnails: {
            defaultUrl: String, 
            mediumUrl: String, 
            highUrl: String, 
            standardUrl: String, 
            maxresUrl: String
        }, 

        tags: [
            String, 
            String, 
            ...
        ]
    }
], 

sources: [
    {
        videoId: String, 
        url: String, 
        last_scraped: DateTime, 

        links: [
            {
                title: String
            }
        ]
    }
], 

playlists: [
    {
        playlistId: String, 
        videos: [
            String (videoId), 
            String (videoId), 
            ...
        ], 
        last_scraped: DateTime
    }
], 

captions: [
    {
        videoId: String, 
        srt: {
            en: String
        }, 
        transcript: String
        last_scraped: DateTime
    }
], 

scrape_info: {
    last_scraped_all_videos_list: DateTime, 
    last_scraped_new_videos_list: DateTime
}
*/

module.exports = async (google) => {
    try {
        await scrape_video_list(google);

        const videosCursor = database.db().collection('video_info').find({});
        for await (const videoInfo of videosCursor) {
            await scrape_video_info(google, videoInfo.id);
            // await scrape_sources(videoInfo.id);
            await scrape_captions(google, videoInfo.id);
        }
        
        await scrape_playlists(google);
    }
    catch (err) {
        console.error(err);
    }
};
