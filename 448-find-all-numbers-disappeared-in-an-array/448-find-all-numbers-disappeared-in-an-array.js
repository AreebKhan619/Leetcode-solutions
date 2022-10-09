/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = new Array(nums.length+1).fill(null);
  arr[0] = true;
  const missing = [];

  nums.forEach((el) => {
    arr[el] = true;
  });

  arr.forEach((el, idx) => {
    !el && missing.push(idx);
  });

  return missing;
};