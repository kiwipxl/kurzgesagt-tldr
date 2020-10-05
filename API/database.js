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