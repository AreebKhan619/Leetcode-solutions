/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closingMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const isOpening = (b) => b === "(" || b === "[" || b === "{";
  const brackets = [];
  for (const bracket of s) {
    if (isOpening(bracket)) brackets.push(bracket);
    else {
      if (brackets.pop() !== closingMap[bracket]) return false;
    }
  }
  return !brackets.length;
};