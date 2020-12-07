const path = require('path');
const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');

/*
See the following link for great documentation on nodejs google auth:
https://github.com/googleapis/google-api-nodejs-client
*/

module.exports.google = function() {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, './credentials.json'), 
        scopes: ['https://www.googleapis.com/auth/youtube.force-ssl']
    });
    google.options({auth});
    return google;
}
