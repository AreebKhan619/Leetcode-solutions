/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  if (columnNumber <= LETTERS_IN_ALPHABET) return cols[columnNumber - 1];
  let suffix = "";
  let dividend = Math.floor(columnNumber / LETTERS_IN_ALPHABET);
  let quotient = columnNumber % LETTERS_IN_ALPHABET;
  if (!quotient) {
    quotient = LETTERS_IN_ALPHABET;
    dividend--;
  }
  console.log(dividend, quotient);
  suffix = cols[quotient - 1] + suffix;
  if (dividend <= LETTERS_IN_ALPHABET) {
    suffix = cols[dividend - 1] + suffix;
    return suffix;
  } else {
    return convertToTitle(dividend) + suffix;
  }
};
const cols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LETTERS_IN_ALPHABET = 26;