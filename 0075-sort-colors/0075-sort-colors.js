/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const len = nums.length;
  let zeroOcc = 0;
  let oneOcc = 0;
  let twoOcc = 0;
  let idx = 0;
  while (idx < nums.length) {
    switch (nums[idx]) {
      case 0:
        zeroOcc++;
        break;
      case 1:
        oneOcc++;
        break;
      case 2:
        twoOcc++;
        break;
      default:
        break;
    }
    idx++;
  }
  const zeros = new Array(zeroOcc).fill(0);
  const ones = new Array(oneOcc).fill(1);
  const twos = new Array(twoOcc).fill(2);
  nums.unshift(...zeros, ...ones, ...twos);
  nums.length = len;
};