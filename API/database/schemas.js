module.exports = {
  collections: {
    video_info: {
      bsonType: 'object',
      required: [
        'id',
        'description',
        'duration',
        'numComments',
        'numDislikes',
        'numLikes',
        'numViews',
        'publishedAt',
        'thumbnails',
        'title',
      ],
      properties: {
        id: {
          bsonType: 'string',
        },
        description: {
          bsonType: 'string',
        },
        duration: {
          bsonType: 'string',
        },
        numComments: {
          bsonType: 'int',
        },
        numDislikes: {
          bsonType: 'int',
        },
        numLikes: {
          bsonType: 'int',
        },
        numViews: {
          bsonType: 'int',
        },
        publishedAt: {
          bsonType: 'string',
        },
        thumbnails: {
          bsonType: 'object',
          properties: {
            defaultUrl: {
              bsonType: ['string', 'null'],
            },
            mediumUrl: {
              bsonType: ['string', 'null'],
            },
            highUrl: {
              bsonType: ['string', 'null'],
            },
            standardUrl: {
              bsonType: ['string', 'null'],
            },
            maxresUrl: {
              bsonType: ['string', 'null'],
            },
          },
        },
        soundtrack: {
          bsonType: 'object',
          required: ['url'],
          properties: {
            url: {
              bsonType: 'string',
            },
          },
        },
        tags: {
          bsonType: ['array', 'null'],
          items: {
            bsonType: 'string',
          },
        },
        title: {
          bsonType: 'string',
        },
      },
    },
  },
};
