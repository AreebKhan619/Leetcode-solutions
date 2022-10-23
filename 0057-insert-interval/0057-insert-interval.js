/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const [providedIntBeg, providedIntEnd] = newInterval;
  let idx = 0;
  let hasMerged = false;

  while (idx < intervals.length) {
    const [currIntBeg, currIntEnd] = intervals[idx];
    if (hasMerged) {
      const [prevIntBeg, prevIntEnd] = intervals[idx - 1];
      if (prevIntEnd >= currIntBeg || prevIntEnd >= currIntEnd) {
        intervals[idx - 1] = [
          Math.min(prevIntBeg, currIntBeg),
          Math.max(prevIntEnd, currIntEnd),
        ];
        intervals.splice(idx, 1);
      } else idx++;
    } else {
      if (currIntBeg > providedIntEnd) {
        intervals = [
          ...intervals.slice(0, idx),
          newInterval,
          ...intervals.slice(idx),
        ];
        hasMerged = true;
      } else if (providedIntBeg <= currIntEnd) {
        intervals[idx] = [
          Math.min(currIntBeg, providedIntBeg),
          Math.max(currIntEnd, providedIntEnd),
        ];
        hasMerged = true;
      }
      idx++;
    }
  }
  if (!hasMerged) intervals.push(newInterval);
  return intervals;
};