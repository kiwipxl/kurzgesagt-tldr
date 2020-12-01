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

            let soundcloudUrl = res.request.uri.href;

            // Sometimes the url contains an id at the end of it, which breaks our app's
            // soundcloud player. So, let's remove that.
            const lastIndex = soundcloudUrl.lastIndexOf('/');
            if (soundcloudUrl.substr(lastIndex + 1, 2) === 's-') {
                soundcloudUrl = soundcloudUrl.substr(0, lastIndex);
            }

            resolve(soundcloudUrl);
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
                soundtrack: {
                    url: soundTrackUrl, 
                    last_updated: Date.now()
                }
            }
        }, 
        { upsert: true }
    );

    console.log(`updated youtube post-process for video ${videoId}`);
}