const request = require('request');
const database = require('../database');

async function findSoundTrackUrl(description) {
    const pattern = /Soundtrack[a-zA-Z0-9\n: \\n]*Soundcloud: *(http[s]?:\/\/[a-zA-Z0-9\-\*\?\=\&\.\/]+)/g;
    const matches = pattern.exec(description);
    if (matches == null) {
        return '';
    }

    const url = matches[1];

    // The url is usually a http://bit.ly link, which means it redirects to the actual
    // soundtrack url. To find the redirected url, let's do a request and get the returned URL.
    return await new Promise((resolve, reject) => {
        request(url, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve(res.request.uri.href);
        });
    });
}

// Updates some additional data or metadata for the given video after youtube data
// has been collected.
module.exports.updateDB = async (videoId) => {
    const dbVideoInfo = await database.db().collection('video_info').findOne({id: videoId});
    if (!dbVideoInfo || !dbVideoInfo.title) {
        return false;
    }

    const soundTrackUrl = await findSoundTrackUrl(dbVideoInfo.description);

    await database.db().collection('video_info').updateOne(
        { id: videoId }, 
        {
            $set: {
                soundTrackUrl: soundTrackUrl
            }
        }, 
        { upsert: true }
    );

    console.log(`updated youtube post-process for video ${videoId}`);
}