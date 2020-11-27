const { parseSync, stringifySync } = require('subtitle');
const database = require('./database');

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

// Regenerates transcripts for every video in the database.
// Useful whenever the format of the transcript changes for example.
module.exports.regenerateDatabase = async () => {
    console.log('regenerating all transcripts in database...');

    const captionsCursor = await database.db().collection('captions').find({});
    for await (const entry of captionsCursor) {
        if (!entry.captions.srt || !entry.captions.srt.en) {
            console.warn(`caption ${entry.id} does not have an SRT entry`)
            continue;
        }

        const newTranscript = module.exports.generate(entry.captions.srt.en);

        await database.db().collection('captions').updateOne(
            { id: entry.id }, 
            {
                $set: {
                    transcript: newTranscript
                }
            }, 
            { upsert: true }
        );
    }

    console.log('finished regenerating all transcripts in database!');
}