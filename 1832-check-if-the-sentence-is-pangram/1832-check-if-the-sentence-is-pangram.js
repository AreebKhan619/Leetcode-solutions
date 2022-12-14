/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphArr = new Array(26).fill(true)
  let charsLeft = 26
  let idx = 0, currIdx = 0
  while (charsLeft && idx < sentence.length) {
    currIdx = sentence[idx].charCodeAt(0) - 97;
    if(alphArr[currIdx]){
      alphArr[currIdx] = false;
      charsLeft--
    }
    idx++;
  }
  return !charsLeft;
};
