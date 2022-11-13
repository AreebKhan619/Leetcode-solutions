/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let sum = 0,
    len = columnTitle.length;
  for (let index = len; index > 0; index--) {
    const codeNo = columnTitle.charCodeAt(index - 1) - 64;
    const stepNo = len - index;
    sum += Math.pow(26, stepNo) * codeNo;
  }
  return sum;
};