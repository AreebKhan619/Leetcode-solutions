/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const sth = {}
  for(let idx = 0; idx< nums.length; idx++){
    const num = nums[idx]
      if (sth[num] !== undefined) {
        if (Math.abs(idx - sth[num]) <= k) return true;
        else sth[num] = idx;
      }
      else {
        sth[num] = idx
      }
  }
  return false;
  }