const isSymbol = (char) => {
  switch (char) {
    case "*":
    case "+":
    case "-":
    case "/":
      return true;
    default:
      return false;
  }
};
const calculate = (left, right, operand) => {
  switch (operand) {
    case "*":
      return left * right;
    case "+":
      return parseInt(left) + parseInt(right);
    case "-":
      return left - right;
    case "/":
      return parseInt(left / right);
    default:
      break;
  }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) return tokens[0];

  let idx = 0;
  let ans;

  while (idx > -1 && idx < tokens.length) {
    if (isSymbol(tokens[idx])) {
      ans = calculate(tokens[idx - 2], tokens[idx - 1], tokens[idx]);
      tokens.splice(idx - 2, 3, `${ans}`);
      idx = idx - 2;
    }
    idx++;
  }

  return ans;
};