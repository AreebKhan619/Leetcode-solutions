/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
    let idx = 0, num

    for(idx=0;idx<nums.length;idx++){
        num = nums[idx];
         if(map.get(target - num)!==undefined) return [idx,  map.get(target - num)];
         map.set(num, idx)
    }
    
    
  return -1
};