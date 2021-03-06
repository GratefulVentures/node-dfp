'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fromDfpDate = fromDfpDate;
exports.toDfpDate = toDfpDate;

function fromDfpDate(dfpDate) {
  return new Date(dfpDate.date.year, dfpDate.date.month, dfpDate.date.day, dfpDate.hour, dfpDate.minute, dfpDate.second);
}

function toDfpDate(date) {
  var timeZoneID = arguments.length <= 1 || arguments[1] === undefined ? 'America/Phoenix' : arguments[1];

  return {
    date: {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    },
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    timeZoneID: timeZoneID
  };
}