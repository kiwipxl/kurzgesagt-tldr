// Script that deploys to Github Pages

const ghPages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// This is incredibly well undocumented and took me hours to figure out, but the out/_next
// folder (which can't be configured) will be ignored by jekyll (Github Pages default) as any
// folder starting with an underscore is ignored.
// So adding an empty .nojekyll file fixes this.
fs.writeFileSync(path.join(__dirname, 'out/.nojekyll'), '');

ghPages.publish('out', {dotfiles: true}, (err) => {
    if (err) {
        console.error('deploy error', err);
    }else {
        console.log('successfully deployed.');
    }
});