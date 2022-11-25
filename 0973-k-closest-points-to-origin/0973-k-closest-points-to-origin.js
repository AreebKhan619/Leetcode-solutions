/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const addedSquares = points.map((point, idx) => {
    return {
      idx,
      sq: Math.pow(point[0], 2) + Math.pow(point[1], 2),
    };
  });
  addedSquares.sort((x, y) => x.sq - y.sq);
  addedSquares.length = k;
  return addedSquares.map((addedSquare) => points[addedSquare.idx]);
};