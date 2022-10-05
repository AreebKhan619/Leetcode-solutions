/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const setFromArr = new Set(nums);
  return setFromArr.size !== nums.length;
};
