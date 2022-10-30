/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n<=0 || n!==1 && n % 2) return false;
  let num =n;
  while (num > 1) {
    if (num % 2) return false;
    num = num / 2;
  }
  return true;
};