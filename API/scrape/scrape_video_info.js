const moment = require('moment');
const database = require('../database');
const util = require('./util');

const SCRAPE_FREQ_INFO = [
    {
        daysAgoPublished: { start: 0, end: 7 }, 
        freqInHours: { start: 8, end: 12 }
    }, 
    {
        daysAgoPublished: { start: 7, end: 30 }, 
        freqInHours: { start: 12, end: 48 }
    }, 
    {
        daysAgoPublished: { start: 30, end: 30 * 6 }, 
        freqInHours: { start: 48, end: 24 * 7 }
    }, 
    {
        daysAgoPublished: { start: 30 * 6, end: 30 * 24 }, 
        freqInHours: { start: 24 * 7, end: 24 * 21 }
    }, 
    {
        daysAgoPublished: { start: 30 * 24, end: 30 * 12 * 100 }, 
        freqInHours: { start: 24 * 21, end: 24 * 30 }
    }
];

module.exports = async (google, videoId) => {
    const dbVideoInfo = await database.db().collection('video_info').findOne({id: videoId});
    if (!dbVideoInfo) {
        throw new Error('failed to find video id', videoId);
    }

    if (dbVideoInfo.last_scraped) {
        const daysAgoPublished = moment().diff(moment(dbVideoInfo.publishedAt), 'days');
        const remainingHoursUntilScrape = util.getRemainingHoursUntilScrape(SCRAPE_FREQ_INFO, daysAgoPublished, dbVideoInfo.last_scraped);
        
        if (remainingHoursUntilScrape > 0) {
            console.log('skipping video info scrape for ' + videoId + '. try again ' + moment().add(remainingHoursUntilScrape, 'hours').fromNow());
            return;
        }
    }

    const youtube = google.youtube('v3');

    console.log('scraping video info for', videoId);

    const videoInfoRes = await youtube.videos.list({
        part: ['snippet', 'contentDetails', 'statistics'], 
        id: videoId
    });

    const videoInfo = videoInfoRes.data.items[0];
    const thumbnails = videoInfo.snippet.thumbnails;

    await database.db().collection('video_info').updateOne(
        { id: videoId }, 
        {
            $set: {
                title: videoInfo.snippet.title, 
                description: videoInfo.snippet.description, 
                publishedAt: videoInfo.snippet.publishedAt, 

                duration: videoInfo.contentDetails.duration, 
                numViews: parseInt(videoInfo.statistics.viewCount), 
                numLikes: parseInt(videoInfo.statistics.likeCount), 
                numDislikes: parseInt(videoInfo.statistics.dislikeCount), 
                numComments: parseInt(videoInfo.statistics.commentCount), 
                
                thumbnails: {
                    defaultUrl: thumbnails.default ? thumbnails.default.url : undefined, 
                    mediumUrl: thumbnails ? thumbnails.medium.url : undefined, 
                    highUrl: thumbnails.high ? thumbnails.high.url : undefined, 
                    standardUrl: thumbnails.standard ? thumbnails.standard.url : undefined, 
                    maxresUrl: thumbnails.maxres ? thumbnails.maxres.url : undefined
                }, 

                tags: videoInfo.snippet.tags, 

                last_scraped: Date.now()
            }
        }, 
        { upsert: true }
    );
};
