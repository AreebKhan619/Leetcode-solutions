/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const one = '1';
const zero = '0'

var addBinary = function(a, b) {
  let biggerOne = b;
  let smallerOne = a;
  const maxLength = Math.max(biggerOne.length, smallerOne.length);

  if (b.length < a.length) {
    biggerOne = a;
    smallerOne = b;
  }

  smallerOne = smallerOne.padStart(maxLength, zero);

  let lengthIdx = biggerOne.length - 1;
  let resStr = ""
  let carry = zero;

  const addTwoBinaries = (x, y, isCarry = false) => {
    let total = parseInt(x) + parseInt(y);
    if(isCarry) carry = zero;
    if (total > 1) {
      total = zero;
      carry = one;
    }
    return total;
  }

  while (lengthIdx > -1) {
    let letterAtBigger = (biggerOne.charAt(lengthIdx));
    const letterAtSmaller = (smallerOne.charAt(lengthIdx));
    const preSumTotal = addTwoBinaries(carry, letterAtBigger, true)
    const localSum = addTwoBinaries(preSumTotal, letterAtSmaller)
    lengthIdx--;
    resStr = localSum + resStr;
  }
  return (carry === zero ? "" : one) + resStr;
};
