/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let idx = 0;
    for(idx = 0; idx < nums.length; idx++){
        if(nums[idx] >= target) return idx;
    }
    return idx
};