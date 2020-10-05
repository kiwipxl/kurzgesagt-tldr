const database = require('../database');

const SCRAPE_FREQUENCY_MINUTES = 60;

module.exports = async (google, videoId) => {
    const dbVideoInfo = await database.db().collection('video_info').findOne({id: videoId});
    if (!dbVideoInfo) {
        throw new Error('failed to find video id', videoId);
    }

    if (dbVideoInfo.last_scraped) {
        const timeSinceLastScrape = Date.now() - dbVideoInfo.last_scraped;
        if (timeSinceLastScrape < (SCRAPE_FREQUENCY_MINUTES * 60 * 1000)) {
            const cooldownMinutes = Math.round(SCRAPE_FREQUENCY_MINUTES - (timeSinceLastScrape / 60 / 1000));
            console.log('skipping video info scrape for ' + videoId + '. can try again in ' + cooldownMinutes + 'm');
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
