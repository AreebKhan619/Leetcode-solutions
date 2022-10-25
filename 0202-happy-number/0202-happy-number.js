/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};
  var num = n.toString();
  var sum, idx
  while (!map[num]) {
    sum = 0;
    for (idx in num) {
      sum += Math.pow(num[idx], 2);
    }
    if (sum === 1) return true;
    map[num] = true;
    num = sum.toString();
  }
  return false;
};