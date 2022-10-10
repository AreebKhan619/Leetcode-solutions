/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const mapping = {};

  for (const i of ransomNote) {
    mapping[i] = (mapping[i] || 0) + 1;
  }

  for (const i of magazine) {
    if (mapping[i] === 1) delete mapping[i];
    else if (mapping[i]) mapping[i] = mapping[i] - 1;
  }

  return !Object.keys(mapping).length;
};
