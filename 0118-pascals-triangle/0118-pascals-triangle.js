/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  // numRows = number of elements
  const pascalsTriangle = [[1]]
  for (let idx = 1; idx < numRows; idx++) {
    const elementArrToPush = [] // of length 'index+1'
    const elementArrLen = idx + 1;
    elementArrToPush.length = elementArrLen;

    elementArrToPush[0] = 1;
    elementArrToPush[idx] = 1;

    for (let j = 1; j < elementArrLen - 1; j++) {
      elementArrToPush[j] = pascalsTriangle[idx - 1][j - 1] + pascalsTriangle[idx - 1][j]
    }

    pascalsTriangle.push(elementArrToPush)
  }
  return pascalsTriangle
};