/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const finalArr = [];

  const frequency = arr1.reduce((acc, el) => {
    acc.set(el, (acc.get(el) || 0) + 1);
    return acc;
  }, new Map());

  arr2.forEach((el) => {
    finalArr.push(...new Array(frequency.get(el)).fill(el));
    frequency.delete(el);
  });

  for (const el in frequency) {
    finalArr.push(...new Array(frequency[el]).fill(el));
  }

  const sth = Array.from(frequency).sort((x, y) => x[0] - y[0]);
  for (const arr of sth) {
    finalArr.push(...new Array(arr[1]).fill(arr[0]));
  }

  return finalArr;
};