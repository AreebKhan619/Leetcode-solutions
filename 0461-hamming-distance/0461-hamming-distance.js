const getInBinary = (num) => {
  const arr = [];
  while (num >= 1) {
     arr.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return arr;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let arr1 = getInBinary(x);
  let arr2 = getInBinary(y);
  let dist = 0;
  const maxLen = Math.max(arr1.length, arr2.length);

  arr1 = new Array(maxLen - arr1.length).fill(0).concat(arr1);
  arr2 = new Array(maxLen - arr2.length).fill(0).concat(arr2);

  for (const idx in arr1) {
    if (arr1[idx] !== arr2[idx]) dist++;
  }

  return dist;
};