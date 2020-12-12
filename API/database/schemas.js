const database = require('./database');

async function applyAll() {
  apply('video_info', module.exports.collections.video_info);
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
}

module.exports = {
  apply: apply,
  applyAll: applyAll,
  validate: validate,
  validateAll: validateAll,

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
