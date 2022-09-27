/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return len;
  let i = 0;
  let addOneMore = false;
  let mapper = {};
  while (i < len) {
    mapper[s.charAt(i)] = (mapper[s.charAt(i)] || 0) + 1;
    i++;
  }

  const palindromeLen = Object.values(mapper).reduce((acc, count) => {
    if (count % 2) {
      addOneMore = true;
      acc += count - 1;
    } else acc += count;
    return acc;
  }, 0);

  return palindromeLen + (addOneMore ? 1 : 0);
};