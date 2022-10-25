/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};
  let num = n.toString();
  while (!map[num]) {
    let sum = 0;
    for (const idx in num) {
      sum += num[idx] * num[idx];
    }
    if (sum === 1) return true;
    map[num] = true;
    num = sum.toString();
  }
  return false;
};