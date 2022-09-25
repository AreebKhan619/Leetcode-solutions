/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if(s.length !== t.length) return false;
  return Array.from(s).sort().join() === Array.from(t).sort().join()
};