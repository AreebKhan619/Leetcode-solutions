/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const s = new Set();
  const getSumOfSquares = (num) => {
    if (s.has(num)) return false;
    let sum = 0;
    for (const idx in num) {
      sum += num[idx] * num[idx];
    }
    if (sum === 1) return true;
    s.add(num);
    return getSumOfSquares(sum + "");
  };

  return getSumOfSquares(n + "");
};