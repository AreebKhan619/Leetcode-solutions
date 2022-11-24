/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (d) {
  const [year, month, date] = d.split("-").map((el) => parseInt(el));

  let daysTillTheStartOfMonth = 0;
  for (let index = 1; index < month; index++) {
    if (index > 7) {
      if (!(index % 2)) daysTillTheStartOfMonth += 31;
        else daysTillTheStartOfMonth += 30;
    } else if (index % 2) daysTillTheStartOfMonth += 31;
    else daysTillTheStartOfMonth += 30;
  }

  if (month > 2) {
    let subtractForFeb = 2;
    if (!(year % 2)) {
      const FIRST_LEAP_YEAR = 1904;
      if (!((year % FIRST_LEAP_YEAR) % 4)) {
        if (year !== 1900) subtractForFeb--;
      }
    }
    daysTillTheStartOfMonth -= subtractForFeb;
  }

  return daysTillTheStartOfMonth + date;
};
