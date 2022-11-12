const findThePreviousTimestampValue = (arr, target, start, end) => {
  if (start > end) return arr[end];
  const midIdx = Math.floor((start + end) / 2);
  const midEl = arr[midIdx];
  const prevEl = arr[midIdx - 1];
  if (midEl > target && prevEl < target) {
    return prevEl;
  } else if (midEl > target)
    return findThePreviousTimestampValue(arr, target, start, midIdx);
  else if (midEl < target)
    return findThePreviousTimestampValue(arr, target, midIdx + 1, end);
};

var TimeMap = function () {
  this.map = new Map();
  this.timestamps = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  this.map.set(`${key},${timestamp}`, value);
  let sortedTimestamps = this.timestamps.get(key) || [];
  sortedTimestamps.push(timestamp);
  this.timestamps.set(key, sortedTimestamps);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let val = this.map.get(`${key},${timestamp}`);
  if (val === undefined) {
    const arr = this.timestamps.get(key) || [];
    // if the array doesn't exist, return an empty string
    if (!arr.length) return "";
    // if the first element is greater than the timestamp, it means nothing is smaller than the timestamp, return ""
    if (arr[0] > timestamp) return "";
    // if the timestamp is greater than the last element, it means we should return the last element
    if (arr[arr.length - 1] < timestamp) {
      const previousTimestamp = this.timestamps.get(key)[arr.length - 1];
      return this.map.get(`${key},${previousTimestamp}`);
    }
    val = this.map.get(`${key},${findThePreviousTimestampValue(arr, timestamp, 0, arr.length - 1)}`);
  }
  return val || "";
};