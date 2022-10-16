/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > arr[idx + 1]) {
      return idx;
    }
  }
};