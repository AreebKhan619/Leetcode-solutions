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

  const getRes = (idx1, idx2, idx3) => {
    return calculate(tokens[idx1], tokens[idx2], tokens[idx3]);
  };

  let idx = tokens.findIndex((el) => isSymbol(el));
  let ans;

  while (idx > -1 && idx < tokens.length) {
    ans = getRes(idx - 2, idx - 1, idx);
    tokens.splice(idx - 2, 3, `${ans}`);
    idx = tokens.findIndex((el) => isSymbol(el));
  }

  return ans;
};