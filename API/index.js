const path = require('path');
const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');
const database = require('./database');
const scrape = require('./scrape/scrape');

function googleAuthenticate() {
    return new Promise((resolve, reject) => {
        authenticate({
            keyfilePath: path.join(__dirname, './credentials.json'), 
            scopes: ['https://www.googleapis.com/auth/youtube.force-ssl']
        }).then(auth => {
            google.options({auth});
            resolve(auth);
        }).catch(err => {
            console.error(err);
            reject(err);
        });
    });
}

async function init() {
    try {
        await database.connect();
    }
    catch (err) {
        console.error('failed to connect to database', err);
    }
}

init();