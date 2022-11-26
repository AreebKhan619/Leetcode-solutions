/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const len = arr.length;
  const newArr = [];

  arr.forEach((el) => {
    if (!el) newArr.push(0, 0);
    else newArr.push(el);
  });
  newArr.length = len;
  arr.length = 0;
  arr.push(...newArr);
};
