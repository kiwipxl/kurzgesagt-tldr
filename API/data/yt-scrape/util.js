const moment = require('moment');

module.exports.getRemainingHoursUntilScrape = function (scrapeFreqInfo, daysAgoPublished, lastScraped) {
    if (!lastScraped) {
        return 0;
    }

    for (const data of scrapeFreqInfo) {
        if (daysAgoPublished >= data.daysAgoPublished.start) {
            if (daysAgoPublished <= data.daysAgoPublished.end) {
                const t = (daysAgoPublished - data.daysAgoPublished.start) / (data.daysAgoPublished.end - data.daysAgoPublished.start);
                const freqInHours = data.freqInHours.start + (data.freqInHours.end - data.freqInHours.start) * t;

                return freqInHours - moment().diff(moment(lastScraped), 'hours');
            }
        }
    }

    return 100000;
}
