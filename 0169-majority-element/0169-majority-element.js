/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const minOcc = Math.floor(nums.length / 2);
  const map = new Map();
  let count;
  for (const iterator of nums) {
    count = map.get(iterator) || 0;
    map.set(iterator, count + 1);
    if (count + 1 > minOcc) return iterator;
  }

  return minOcc;
};