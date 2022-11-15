/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const resArr = [];
  let leftIdx = 0,
    rightIdx = nums.length - 1;

  while (leftIdx <= rightIdx) {
    const leftSq = Math.pow(nums[leftIdx], 2);
    const rightSq = Math.pow(nums[rightIdx], 2);;
    if (leftSq > rightSq) {
      resArr.unshift(leftSq);
      leftIdx++;
    } else {
      resArr.unshift(rightSq);
      rightIdx--;
    }
  }
  return resArr;
};