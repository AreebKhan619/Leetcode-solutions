/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
  let pairMap = new Map();

  arr.forEach(el => {
    if (pairMap.has(el)) {
        pairMap.delete(el)
    } else {
        pairMap.set(el, true)
    }
  });

  return pairMap.keys().next().value
};