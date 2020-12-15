const cheerio = require('cheerio');
const request = require('request');
const database = require('../database');
const util = require('../../util');

function removeWhitespace(str) {
  return str.replace(/[\t\n\r]/g, '');
}

// This function is pretty out there.
// Basically, some of Kurzgesagt's youtube videos have sources such as
// https://sites.google.com/view/sourceslargeststar
// They are formatted in a very loose way, so this function attempts to parse them
// and organise them into a structure.
//
// It returns a list of 'key points' from the data.
// A key point is a bold title that contains text content within it or citations.
module.exports.generate = (htmlString) => {
  let keyPoints = [];
  const $ = cheerio.load(htmlString);

  function parseCitation(linkEl) {
    if (!util.isUrl($(linkEl).text())) {
      return null;
    }

    let citation = {
      url: removeWhitespace($(linkEl).text().toString()),
      title: '',
      metadata: [],
    };

    let title = removeWhitespace($($(linkEl).parents('p')[0]).prev().text());
    if (title.startsWith('#')) {
      citation['title'] = title.replace('#', '');
    }

    let cursorEl = $(linkEl).parents('p')[0];
    while (true) {
      cursorEl = $(cursorEl).next();
      if (
        cursorEl.children().length == 0 ||
        cursorEl.children().get(0).tagName === 'br'
      ) {
        break;
      }

      let text = removeWhitespace($(cursorEl).text());

      if (text.startsWith('Quote')) {
        text = text.replace(/Quote[:\.][ ]*/g, '');
        text = text.replace(/["“”]/g, '');
        citation['quote'] = text;
        continue;
      }

      citation.metadata.push(text);
    }

    return {
      lastEl: cursorEl,
      citation: citation,
    };
  }

  $('strong').each((index, element) => {
    function isKeyPointTitle(str) {
      return str.startsWith('–') || str.startsWith('-');
    }

    let title = removeWhitespace($(element).parent().text());
    if (!isKeyPointTitle(title)) {
      return;
    }

    title = title.replace(/[–-] */g, '');

    let keyPoint = {
      title: title,
      content: [],
    };
    keyPoints.push(keyPoint);

    let cursorEl = $(element).parents('p')[0];
    while (true) {
      cursorEl = $(cursorEl).next();

      // If we've hit the next key point title, we know we've finished parsing our
      // current key point.
      if (isKeyPointTitle(removeWhitespace(cursorEl.text()))) {
        break;
      }
      // We've reached the end of the tags. This can happen sometimes, as key points are
      // sometimes wrapped in divs.
      if (cursorEl == cursorEl.next()) {
        break;
      }

      let text = removeWhitespace(cursorEl.text());

      if (text.startsWith('#')) {
        continue;
      }

      const links = cursorEl.find('a');
      if (cursorEl.children().length > 0 && links.length == 1) {
        const result = parseCitation(links[0]);
        if (result != null) {
          cursorEl = result.lastEl;

          keyPoint.content.push({
            type: 'citation',
            data: result.citation,
          });
          continue;
        }
      }

      if (text !== '') {
        keyPoint.content.push({
          type: 'text',
          data: text,
        });
      }
    }
  });

  return keyPoints;
};

// Updates the sources in the database for the given video.
module.exports.update = async (videoId) => {
  const dbVideoInfo = await database
    .db()
    .collection('video_info')
    .findOne({ id: videoId });

  if (!dbVideoInfo) {
    return false;
  }

  const pattern = /(http[s]?:\/\/sites\.google[a-zA-Z0-9\-\*\?\=\&\.\/]+)/g;
  const matches = pattern.exec(dbVideoInfo.description);
  if (matches == null) {
    return;
  }

  const url = matches[0];

  await new Promise((resolve, reject) => {
    request(url, async (err, res, body) => {
      if (err) {
        reject(err);
        return;
      }

      const keyPoints = module.exports.generate(body);

      await database
        .db()
        .collection('sources')
        .updateOne(
          { id: videoId },
          {
            $set: {
              url: url,
              keyPoints: keyPoints,
              last_updated: Date.now(),
            },
          },
          { upsert: true }
        );

      resolve();
    });
  });

  console.log(`updated sources for video ${videoId}`);

  return true;
};
