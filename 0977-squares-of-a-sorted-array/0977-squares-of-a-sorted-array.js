/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const resArr = new Array(nums.length).fill(0);
  let leftIdx = 0,
    rightIdx = nums.length - 1, resIdx = rightIdx;

  while (resIdx > -1) {
    const leftSq = Math.pow(nums[leftIdx], 2);
    const rightSq = Math.pow(nums[rightIdx], 2);;
    if (leftSq > rightSq) {
      resArr[resIdx] = leftSq;
      leftIdx++;
    } else {
      resArr[resIdx] = rightSq;
      rightIdx--;
    }
      resIdx--;
  }
  return resArr;
};