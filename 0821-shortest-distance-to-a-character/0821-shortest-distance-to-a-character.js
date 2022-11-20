/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let resArr = new Array(s.length).fill(s.length);
  let idx = 0;

  const setRecursively = (idx, val) => {
    if (idx >= s.length || idx < 0) return;
    if (resArr[idx] <= val) return;
    resArr[idx] = val;
    setRecursively(idx + 1, val + 1);
    setRecursively(idx - 1, val + 1);
  };

  while (idx < s.length) {
    const curr = s.charAt(idx);
    if (curr === c) {
      setRecursively(idx, 0);
    }
    idx++;
  }
  return resArr;
};
