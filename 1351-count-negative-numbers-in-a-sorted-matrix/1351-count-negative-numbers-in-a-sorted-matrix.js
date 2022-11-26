/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let outerIdx = 0;
  let innerIdx = grid[0].length - 1;
  let negatives = 0;

  while (outerIdx < grid.length) {
    if (grid[outerIdx][innerIdx] < 0 && innerIdx > -1) {
      negatives++;
      innerIdx--;
    } else {
      outerIdx++;
      innerIdx = grid[0].length - 1;
    }
  }
  return negatives;
};