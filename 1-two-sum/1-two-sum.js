/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let idx = 0;
  while (idx < nums.length) {
    const subIdx = nums
      .slice(idx + 1)
      .findIndex((el) => el === target - nums[idx]);
    if (subIdx > -1) return [idx, idx + 1 + subIdx];
    idx++;
  }
  return nums;
};
