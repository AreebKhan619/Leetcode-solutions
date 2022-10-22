const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0,
    prevVal = 0;
  for(let i=0;i<s.length;i++){
        let val = map[s[i]];
    total += val;
    if (prevVal < val) {
      total -= 2 * prevVal;
    }
    prevVal = val;  
  }
  return total;
};