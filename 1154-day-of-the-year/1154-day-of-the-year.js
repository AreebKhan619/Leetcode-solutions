/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (d) {
  const [year, month, date] = d.split("-").map((el) => parseInt(el));

  let daysTillTheStartOfMonth = 0;
  for (let index = 1; index < month; index++) {
    let addDays = 30;
    if (index > 7) {
      index % 2 ? null : (addDays += 1);
    } else {
      index % 2 ? (addDays += 1) : null;
    }
    daysTillTheStartOfMonth += addDays;
  }

  if (month > 2) {
    let subtractForFeb = 2;
    if (!(year % 2)) {
      const FIRST_LEAP_YEAR = 1904;
      if (!((year % FIRST_LEAP_YEAR) % 4)) {
        console.log("LEAP YEAR FOUND");
        if (year !== 1900) subtractForFeb--;
      }
    }
    daysTillTheStartOfMonth -= subtractForFeb;
  }

  return daysTillTheStartOfMonth + date;
};
