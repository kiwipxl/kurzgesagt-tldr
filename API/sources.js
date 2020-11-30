const cheerio = require('cheerio');

function removeWhitespace(str) {
    return str.replace(/[\t\n\r]/g, '');
}

module.exports.generate = (htmlString) => {
    let keyPoints = [];
    const $ = cheerio.load(htmlString);

    function parseCitation(linkEl) {
        // test if link text is a url.
        const urlRegex = /(http[s]?:\/\/[a-zA-Z0-9\-\*\?\=\&\.\/]+)/g;
        if (!urlRegex.test($(linkEl).text())) {
            return null;
        }

        let citation = {
            url: removeWhitespace($(linkEl).text().toString()), 
            title: '', 
            metadata: []
        };

        let title = removeWhitespace($($(linkEl).parents('p')[0]).prev().text());
        if (title.startsWith('#')) {
            citation['title'] = title.replace('#', '');
        }

        let cursorEl = $(linkEl).parents('p')[0];
        while (true) {
            cursorEl = $(cursorEl).next();
            if (cursorEl.children().length == 0 || cursorEl.children().get(0).tagName === 'br') {
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
            citation: citation
        };
    }

    $('strong').each((index, element) => {
        function isKeyPointTitle(str) {
            return str.startsWith('–') || str.startsWith('–');
        }

        let title = removeWhitespace($(element).parent().text());
        if (!isKeyPointTitle(title)) {
            return;
        }

        title = title.replace(/[–-] */g, '');

        let keyPoint = {
            title: title, 
            content: []
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
                        data: result.citation
                    });
                    continue;
                }
            }

            if (text !== '') {
                keyPoint.content.push({
                    type: 'text', 
                    data: text
                });
            }
        }
    });

    return keyPoints;
};