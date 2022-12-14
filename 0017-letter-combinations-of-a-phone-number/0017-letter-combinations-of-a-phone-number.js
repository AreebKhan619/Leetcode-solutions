/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [];
  const mapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  for (const num of digits) {
    if (!res.length) {
      res = mapping[num]
    } else {
      const sth = [];
      const arr = mapping[num];
      res.forEach((el) => {
        arr.forEach((a) => {
          sth.push(`${el}${a}`);
        });
      });
      res = sth
    }
  }

  return res;
};