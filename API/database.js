const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:admin_password@kurzgesagt-tldr.u4ny2.mongodb.net/kurzgesagt-tldr?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
    useUnifiedTopology: true
});
let database;

async function connect() {
    await client.connect();

    database = client.db('kurzgesagt-tldr');
}

module.exports = {
    connect: connect, 
    db: () => database
};

/*
Database model.

video_info: [
    {
        id: String, // video id
        publishedAt: DateTime, 
        title: String, 
        description: String, 
        duration: String, 
        numViews: Number, 
        numLikes: Number, 
        numDislikes: Number, 
        numComments: Number, 
        last_scraped: DateTime, 

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
        ], 

        soundtrack: {
            url: String, 
            last_updated: DateTime
        }
    }
], 

sources: [
    {
        id: String, // video id
        url: String, 
        last_updated: DateTime, 

        keyPoints: [
            {
                title: String, 
                content: [
                    {
                        type: String, 
                        data: Any
                    }
                ]
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
        id: String, // video id
        last_scraped: DateTime

        captions: {
            srt: {
                en: String
            }
        }, 

        transcript: {
            en: String, 
            last_updated: DateTime
        }
    }
], 

scrape_info: {
    last_scraped_all_videos_list: DateTime, 
    last_scraped_new_videos_list: DateTime
}
*/