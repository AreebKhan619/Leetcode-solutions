/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const resArr = [];
  intervals.sort((x, y) => {
    return x[0] - y[0];
  });
  for (const idx in intervals) {
    const lastInterval = resArr[resArr.length - 1];
    const currentInterval = intervals[idx];
    if (!lastInterval) resArr.push(intervals[idx]);
    else {
      if (currentInterval[0] <= lastInterval[0]) {
        resArr[resArr.length - 1] = [
          currentInterval[0],
          Math.max(currentInterval[1], lastInterval[1]),
        ];
      }
      // console.log(lastInterval, currentInterval);
      else if (lastInterval[1] >= currentInterval[0]) {
        resArr[resArr.length - 1] = [
          lastInterval[0],
          Math.max(currentInterval[1], lastInterval[1]),
        ];
      } else resArr.push(currentInterval);
      // if last el doesn't exist / we have changed the last element of the resArr, then lastInterval =
    }
  }
  return resArr;
};
