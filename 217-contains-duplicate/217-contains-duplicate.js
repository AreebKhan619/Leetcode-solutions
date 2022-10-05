/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const distinct = new Set(nums);
    return distinct.size !== nums.length;
};
