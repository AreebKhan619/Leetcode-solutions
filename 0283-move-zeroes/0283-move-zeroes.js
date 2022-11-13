/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let numZ = 0,
    len = nums.length,
    i = 0;
  copy = nums.slice();
  nums.length = 0;

  while (i < len) {
    if (!copy[i]) {
      numZ++;
    } else {
      nums.push(copy[i]);
    }
    i++;
  }
  nums.push(...Array(numZ).fill(0));
  return nums;
};
