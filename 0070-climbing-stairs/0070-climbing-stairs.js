/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let secondLast = 0;
  let last = 1;
  let i = 1;
  while (i <= n) {
    var ways = 0;
    if (i - 2 >= 0) {
      ways += secondLast;
    }
    if (i - 1 >= 0) {
      ways += last;
    }
    if (i === n) return ways;
    secondLast = last;
    last = ways;
    i++;
  }
  return last;
};