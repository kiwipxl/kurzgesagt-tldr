const { MongoClient } = require('mongodb');
const path = require('path');
const fs = require('fs');

const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, '../database_credentials.json')));

const uri =
  `mongodb+srv://${credentials.user}:${credentials.password}@${credentials.clusterUrl}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});
let database;

async function connect() {
  await client.connect();

  database = client.db('kurzgesagt-tldr');
}

module.exports = {
  connect: connect,
  db: () => database,
};
