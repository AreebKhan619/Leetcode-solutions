/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const mapper = {};
  const reverseMapper = {};
  for (const index in s) {
    const first = s[index],
      second = t[index];
    if (reverseMapper[second] && reverseMapper[second] !== first) return false;
    if (mapper[first]) {
      if (mapper[first] !== second) return false;
    } else {
      mapper[first] = second;
      reverseMapper[second] = first;
    }
  }
  return true;
};