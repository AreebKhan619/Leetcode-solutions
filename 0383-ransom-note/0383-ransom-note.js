/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const mapping = {};
  let keysLength = 0;

  for (const i of ransomNote) {
    if (mapping[i]) {
      mapping[i]++;
    } else {
      mapping[i] = 1;
      keysLength++;
    }
  }

  for (const i of magazine) {
    var val = mapping[i];
    if (val) {
      if (val === 1) {
        delete mapping[i];
        keysLength--;
      } else {
        mapping[i] = mapping[i] - 1;
      }
    }
    if (!keysLength) return true;
  }

  return false;
};