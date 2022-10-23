/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (const i in s) {
    const letter = s[i];
    map.set(letter, (map.get(letter) || 0) + 1);
  }
  for (const i in t) {
    const letter = t[i];
    let val = map.get(letter);
    if (!val) return false;
    else if (val === 1) map.delete(letter);
    else map.set(letter, val - 1);
  }
  return !map.size;
};