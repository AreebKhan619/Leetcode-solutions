  const isUndefined = (sth) => sth === undefined;
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let leftIdx = 0,
    rightIdx = nums.length - 1;

  let isIncreasing;
  let prevLeft = nums[leftIdx],
    prevRight = nums[rightIdx];


  while (leftIdx < nums.length && rightIdx > -1) {
    if (isUndefined(isIncreasing)) {
      let isLeftIncreasing, isRightIncreasing;
      if (nums[leftIdx] !== prevLeft) {
        isLeftIncreasing = nums[leftIdx] > prevLeft;
      }
      if (nums[rightIdx] !== prevRight) {
        isRightIncreasing = nums[rightIdx] < prevRight;
      }

      // if both are undefined, do nothing
      // if either one is defined, keep that value
      // if both are defined, check if they match, if they don't return false, else keep either value since they match

      const isLeftDefined = !isUndefined(isLeftIncreasing);
      const isRightDefined = !isUndefined(isRightIncreasing);

      if (isLeftDefined || isRightDefined) {
        if (isLeftDefined && isRightDefined) {
          if (isLeftIncreasing !== isRightIncreasing) return false;
          isIncreasing = isLeftIncreasing;
        } else {
          isIncreasing = isLeftIncreasing ?? isRightIncreasing;
        }
      }
    }

    if (isIncreasing && prevLeft > nums[leftIdx]) return false;
    if (!isIncreasing && nums[leftIdx] > prevLeft) return false;

    if (isIncreasing && prevRight < nums[rightIdx]) return false;
    if (!isIncreasing && prevRight > nums[rightIdx]) return false;

    if (leftIdx === rightIdx + 1) return true;

    prevLeft = nums[leftIdx];
    prevRight = nums[rightIdx];
    leftIdx++;
    rightIdx--;
  }

  return true;
};