const database = require('./database');

async function applyAll() {
  apply('video_info', module.exports.collections.video_info);
  apply('sources', module.exports.collections.sources);
  apply('captions', module.exports.collections.captions);
  apply('playlists', module.exports.collections.playlists);
}

async function apply(collectionName, schema) {
  await database.db().command({
    collMod: collectionName,
    validator: {
      $jsonSchema: schema,
    },
    validationLevel: 'strict',
  });
}

async function validateAll() {
  validate('video_info', module.exports.collections.video_info);
  validate('sources', module.exports.collections.sources);
  validate('captions', module.exports.collections.captions);
  validate('playlists', module.exports.collections.playlists);
}

async function validate(collectionName, schema) {
  const cursor = database
    .db()
    .collection(collectionName)
    .find({
      $nor: [
        {
          $jsonSchema: schema,
        },
      ],
    });

  for await (const document of cursor) {
    throw new Error(
      `${collectionName} failed schema validation with the following data: ${JSON.stringify(
        document
      )}`
    );
  }

  console.log(
    `all documents in '${collectionName}' collection meet schema rules`
  );
}

module.exports = {
  apply,
  applyAll,
  validate,
  validateAll,

  collections: {
    video_list: {
      bsonType: 'object',
      required: ['id'],
      properties: {
        id: {
          bsonType: 'string',
        },
      },
    },

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

    sources: {
      bsonType: 'object',
      required: ['keyPoints'],
      properties: {
        keyPoints: {
          bsonType: ['array', 'null'],
          items: {
            bsonType: 'object',
            required: ['title', 'content'],
            properties: {
              title: {
                bsonType: 'string',
              },
              content: {
                bsonType: 'array',
                items: {
                  bsonType: 'object',
                  required: ['type'],
                  properties: {
                    type: {
                      bsonType: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    captions: {
      bsonType: 'object',
      required: ['captions'],
      properties: {
        captions: {
          bsonType: 'object',
          required: ['srt'],
          properties: {
            srt: {
              bsonType: 'object',
              required: ['en'],
              properties: {
                en: {
                  bsonType: 'string',
                },
              },
            },
          },
        },
        transcript: {
          bsonType: 'object',
          required: ['en'],
          properties: {
            en: {
              bsonType: 'string',
            },
          },
        },
      },
    },

    playlists: {
      bsonType: 'object',
      required: [
        'id',
        'description',
        'publishedAt',
        'thumbnails',
        'title',
        'videos',
      ],
      properties: {
        description: {
          bsonType: 'string',
        },
        title: {
          bsonType: 'string',
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
        videos: {
          bsonType: 'array',
          items: {
            bsonType: 'string',
          },
        },
      },
    },
  },
};
