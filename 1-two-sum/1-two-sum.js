/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let leftIdx, rightIdx;
  let maxIdx = nums.length - 1;
  for (leftIdx = 0, rightIdx = maxIdx; leftIdx <= maxIdx - 1; rightIdx--) {
    if(nums[leftIdx]+nums[rightIdx]===target) return [leftIdx, rightIdx]
    if (rightIdx === leftIdx + 1){
      rightIdx = maxIdx+1;
      leftIdx++;
    };
  }
  return -1
};