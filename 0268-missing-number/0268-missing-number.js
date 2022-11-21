/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let expectedTotal = nums.length,
    actualTotal = 0;

  nums.forEach((num, idx) => {
    expectedTotal += idx;
    actualTotal += num;
  });

  return expectedTotal - actualTotal;
};
