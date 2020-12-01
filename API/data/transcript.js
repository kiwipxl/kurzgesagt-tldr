const { parseSync, stringifySync } = require('subtitle');
const database = require('../database');

// NOTE: whenever this function changes, you may want to invoke `regenerateDatabase`
// so that all database entries will be updated with the new changes
module.exports.generate = (srt) => {
    let transcript = '';

    let captions = parseSync(srt);
    for (const caption of captions) {
        transcript += caption.data.text + ' ';
    }

    transcript = transcript.replace(/\n/g, ' ');
    transcript = transcript.replace(/\.^ /g, '. ');

    // add paragraphs
    let paragraphTranscript = '';
    let wordCount = 0;
    for (let n = 0; n < transcript.length; ++n) {
        paragraphTranscript += transcript[n];

        if (transcript[n] == ' ') {
            ++wordCount;
        }

        if (wordCount >= 80 && transcript[n] == '.') {
            paragraphTranscript += '\n\n';
            wordCount = 0;
            ++n; // skip space in next character
        }
    }

    return paragraphTranscript;
}

// Updates the transcript in the database for the given video.
module.exports.updateDB = async (videoId) => {
    const captions = await database.db().collection('captions').findOne({id: videoId});
    if (!(captions && captions.captions && captions.captions.srt && captions.captions.srt.en)) {
        return false;
    }

    const newTranscript = module.exports.generate(captions.captions.srt.en);

    await database.db().collection('captions').updateOne(
        { id: captions.id }, 
        {
            $set: {
                transcript: newTranscript
            }
        }, 
        { upsert: true }
    );

    console.log(`updated transcript for video ${videoId}`);
}