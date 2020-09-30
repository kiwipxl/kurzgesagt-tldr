const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function connect() {
    await client.connect();

    const list = await client.db().admin().listDatabases();
    list.databases.forEach(db => console.log(db));
}

module.exports = {
    connect: connect
};