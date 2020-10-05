const moment = require('moment');
const database = require('../database');

const SCRAPE_FREQ = [
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
    }
];

function getRemainingHoursUntilScrape(daysAgoPublished, lastScraped) {
    if (!lastScraped) {
        return 0;
    }

    for (const data of SCRAPE_FREQ) {
        if (daysAgoPublished >= data.daysAgoPublished.start) {
            if (daysAgoPublished <= data.daysAgoPublished.end) {
                const t = (daysAgoPublished - data.daysAgoPublished.start) / (data.daysAgoPublished.end - data.daysAgoPublished.start);
                const freqInHours = data.freqInHours.start + (data.freqInHours.end - data.freqInHours.start) * t;
                
                return freqInHours - moment().diff(moment(lastScraped), 'hours');
            }
        }
    }

    return Number.MAX_SAFE_INTEGER;
}

module.exports = async (google, videoId) => {
    const dbVideoInfo = await database.db().collection('video_info').findOne({id: videoId});
    if (!dbVideoInfo) {
        throw new Error('failed to find video id', videoId);
    }

    const daysAgoPublished = moment().diff(moment(dbVideoInfo.publishedAt), 'days');
    const remainingHoursUntilScrape = getRemainingHoursUntilScrape(daysAgoPublished, dbVideoInfo.last_scraped);

    if (remainingHoursUntilScrape > 0) {
        console.log('skipping video info scrape for ' + videoId + '. try again ' + moment().add(remainingHoursUntilScrape, 'hours').fromNow());
        return;
    }

    return;

    const youtube = google.youtube('v3');

    console.log('scraping video info for', videoId);

    const videoInfoRes = await youtube.videos.list({
        part: ['snippet', 'contentDetails', 'statistics'], 
        id: videoId
    });

    const videoInfo = videoInfoRes.data.items[0];

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
                    defaultUrl: videoInfo.snippet.thumbnails.default.url, 
                    mediumUrl: videoInfo.snippet.thumbnails.medium.url, 
                    highUrl: videoInfo.snippet.thumbnails.high.url, 
                    standardUrl: videoInfo.snippet.thumbnails.standard.url, 
                    maxresUrl: videoInfo.snippet.thumbnails.maxres.url
                }, 

                tags: videoInfo.snippet.tags, 

                last_scraped: Date.now()
            }
        }, 
        { upsert: true }
    );
};
