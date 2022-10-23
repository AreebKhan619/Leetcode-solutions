/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let len = nums.length;
  let actualSum = 0;
  let expectedSum = 0;
  let repeatingNum;
  let set = Array.from(new Set(nums));

  for (let index = 0; index < len; index++) {
    actualSum += set[index] || 0;
    expectedSum += index + 1;
    if (!repeatingNum && set[index] !== nums[index]) {
      repeatingNum = nums[index];
    }
  }
  return [repeatingNum, expectedSum - actualSum];
};