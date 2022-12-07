/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num = num+''
    for(let idx=0; idx<num.length;idx++){
      if(num[idx]!=='9'){
        num = num.substring(0, idx) + '9' + num.substring(idx + 1)
          return parseInt(num)
      }
    }
    return parseInt(num)
};