/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (const i in s) {
    const letter = s[i];
    map[letter] = (map[letter] || 0) + 1;
  }
  for (const i in t) {
    const letter = t[i];
    if (!map[letter]) return false;
    else if (map[letter] === 1) delete map[letter];
    else map[letter] = map[letter] - 1;
  }
  return !Object.keys(map).length;
};