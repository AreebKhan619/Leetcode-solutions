/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const valueOfStartingPixel = image[sr][sc];

  const performFloodFill = (rowIdx, colIdx) => {
    const valueOfCurrentPixel = image?.[rowIdx]?.[colIdx];
    if (
      valueOfCurrentPixel !== color &&
      valueOfCurrentPixel !== undefined &&
      valueOfCurrentPixel === valueOfStartingPixel
    ) {
      image[rowIdx][colIdx] = color;
      performFloodFill(rowIdx - 1, colIdx);
      performFloodFill(rowIdx + 1, colIdx);
      performFloodFill(rowIdx, colIdx - 1);
      performFloodFill(rowIdx, colIdx + 1);
    }
  };

  performFloodFill(sr, sc);
  return image;
};