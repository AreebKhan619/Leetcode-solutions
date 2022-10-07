/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let toCarry = false;
  let index = digits.length - 1;

  while (index > -1) {
    // calculate the value that will be formed (first, without carrying)
    let nthPlaceValue = digits[index] + (index === digits.length - 1 ? 1 : 0);
    // if we have a carry pending from the previous one, add it.
    if (toCarry) nthPlaceValue++;
    // if the calculation yields a number greater than 10, set the value as the modulus, and mark that a carry is pending
    if (nthPlaceValue >= 10) {
      nthPlaceValue = nthPlaceValue % 10;
      toCarry = true;
    } else {
      toCarry = false;
    }
    // put the value at the index equal to the calculated value
    digits[index] = nthPlaceValue;
    // if the addition has finished, i.e., no more carrying is required, return the array
    if (!toCarry) return digits;
    else if (index === 0 && toCarry) return [1, ...digits];
    else index--;
  }
};