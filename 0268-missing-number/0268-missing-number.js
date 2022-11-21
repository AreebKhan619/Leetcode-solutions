/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var expectedTotal = 0,
    actualTotal = 0;

  nums.forEach((num, idx) => {
    expectedTotal += idx;
    actualTotal += num;
  });

  return expectedTotal - actualTotal + nums.length;
};
