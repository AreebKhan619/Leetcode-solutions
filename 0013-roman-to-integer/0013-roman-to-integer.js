const getVal = (s) => {
  switch (s) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var total = 0,
    prevVal = 0, val;
  for (const i in s) {
    val = getVal(s[i]);
    total += val;
    if (prevVal < val) {
      total -= 2 * prevVal;
    }
    prevVal = val;
  }
  return total;
};
