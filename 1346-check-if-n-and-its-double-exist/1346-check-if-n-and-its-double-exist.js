/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const map = new Map();
  for (let index = 0; index < arr.length; index++) {
    if (map.get(arr[index] / 2) || map.get(arr[index] * 2)) return true;
    map.set(arr[index], true);
  }
  return false;
};
