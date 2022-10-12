/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
  let pair = {};

  arr.forEach(el => {
    if (pair[el]) {
      delete pair[el];
    } else {
      pair[el] = true;
    }
  });

  return Object.keys(pair)[0];
};