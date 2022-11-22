/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = new Map();

  const getSum = (num) => {
    if (num === 1) return true;
    sum = 0;
    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }
    if (map.get(sum)) return false;
    map.set(sum, true)
    return getSum(sum);
  };

  return getSum(n);
};