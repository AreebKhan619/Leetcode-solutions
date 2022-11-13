/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let sum = 0,
    len = columnTitle.length;
  for (let index = len; index > 0; index--) {
    var codeNo = columnTitle.charCodeAt(index - 1) - 64;
    sum += Math.pow(26, len-index) * codeNo;
  }
  return sum;
};