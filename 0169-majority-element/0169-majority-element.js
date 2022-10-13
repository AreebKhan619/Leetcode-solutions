/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const minOcc = Math.floor(nums.length / 2);
  const mappObj = {};

  for (const iterator of nums) {
    mappObj[iterator] = (mappObj[iterator] || 0) + 1;
    if (mappObj[iterator] > minOcc) return iterator;
  }

  return minOcc;
};