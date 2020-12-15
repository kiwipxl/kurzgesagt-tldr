const fs = require('fs');
const path = require('path');
const sources = require('../database/update/sources');
const util = require('../util');

describe('validate sources', () => {
  /*
  Generates sources from a sample site.
  The results must have the correct structure with all the right types.

  NOTE: in the future this can be done more simply by using the jest-json-schema package.
  https://github.com/americanexpress/jest-json-schema  
  */
  test('make sure sources generator matches valid schema', () => {
    const sourcesStr = fs.readFileSync(
      path.join(__dirname, 'sources_corona.html')
    );

    const genSources = sources.generate(sourcesStr);

    genSources.forEach((keyPoint) => {
      // Ensure valid key point
      expect(keyPoint).toEqual(
        expect.objectContaining({
          title: expect.any(String),
          content: expect.any(Array),
        })
      );

      expect(keyPoint.title.length).toBeGreaterThan(5);

      keyPoint.content.forEach((content) => {
        // Ensure valid types
        expect(content).toEqual(
          expect.objectContaining({
            type: expect.any(String),
            data: expect.anything(),
          })
        );

        expect(['text', 'citation']).toContain(content.type);

        switch (content.type) {
          case 'text':
            // Ensure valid text (paragraph) content
            expect(typeof content.data).toBe('string');
            break;

          case 'citation':
            // Ensure valid citation
            expect(content.data).toEqual(
              expect.objectContaining({
                url: expect.any(String),
                title: expect.any(String),
              })
            );

            expect(util.isUrl(content.data.url)).toBe(true);

            if (content.data.metadata) {
              content.data.metadata.forEach((metadata) =>
                expect(typeof metadata).toBe('string')
              );
            }

            if (content.data.quote) {
              expect(typeof content.data.quote).toBe('string');
            }
            break;
        }
      });
    });
  });

  /*
    Generates sources from a sample site and compares it with a correct
    example of what the data should look like.
    The data should look similar enough, but not exact as we'll allow some leniency.
    */
  test('make sure sources generator has accurate content', () => {
    const sourcesStr = fs.readFileSync(
      path.join(__dirname, 'sources_corona.html')
    );
    const validSources = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'sources_corona.json'))
    );

    // Make sure we have the same number of key points as the valid key points
    const genSources = sources.generate(sourcesStr);
    expect(genSources.length).toEqual(validSources.length);

    genSources.forEach((keyPoint, keyPointIndex) => {
      // Make sure we have the same number of content items as the valid content items
      const validKeyPoint = validSources[keyPointIndex];
      expect(keyPoint.content.length).toEqual(validKeyPoint.content.length);

      keyPoint.content.forEach((content, contentIndex) => {
        // Make sure we have the same content type as the valid content type
        const validContent = validKeyPoint.content[contentIndex];
        expect(content.type).toEqual(validContent.type);
      });
    });
  });
});
