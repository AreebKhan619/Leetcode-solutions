/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphArr = new Array(26).fill(true)
  const arr = new Array(26)
  let idx = 0, currIdx = 0
  while (arr.length && idx < sentence.length) {
    currIdx = sentence[idx].charCodeAt(0) - 97;
    if(alphArr[currIdx]){
      alphArr[currIdx] = false;
      arr.length--
    }
    idx++;
  }
  return !arr.length;
};
