/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let idx = 0;
  let isIncreasing;
  while (idx < nums.length) {
    if (isIncreasing !== undefined) {
      if (isIncreasing && nums[idx] < nums[idx - 1]) return false;
      if (!isIncreasing && nums[idx] > nums[idx - 1]) return false;
    } else {
      if (idx > 0 && nums[idx] !== nums[idx - 1]) {
        isIncreasing = nums[idx] > nums[idx - 1];
      }
    }
    idx++;
  }

  return true;
};