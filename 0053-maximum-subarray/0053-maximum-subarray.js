/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let totalMaxSum = 0,
    localMaxSum = 0;

  for (const num of nums) {
    if (num + localMaxSum < 1) {
      totalMaxSum = Math.max(totalMaxSum, localMaxSum);
      localMaxSum = 0;
    } else {
      if (num < 0) {
        totalMaxSum = Math.max(totalMaxSum, localMaxSum);
      }
      localMaxSum += num;
    }
  }
  totalMaxSum = Math.max(totalMaxSum, localMaxSum) || Math.max(...nums);
  return totalMaxSum;
};