export function fromDfpDate(dfpDate) {
  return new Date(
    dfpDate.date.year,
    dfpDate.date.month,
    dfpDate.date.day,
    dfpDate.hour,
    dfpDate.minute,
    dfpDate.second
  );
}

export function toDfpDate(date, timeZoneID = 'America/Phoenix') {
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
