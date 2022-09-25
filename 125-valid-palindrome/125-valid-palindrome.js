/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replaceAll(/[\W_]+/g, "").toLowerCase();
    return s === Array.from(s).reverse().join("");
  const len = s.length - 1;
  for (const idx in s) {
    if (s.charAt(idx) !== s.charAt(len - idx)) return false;
  }
  return true;
};
