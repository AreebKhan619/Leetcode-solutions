/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let len=x.length, i;
    for(i=0;i<len;i++){
        if(x[i]!==x[len - i -1])return false
    }
    return true
};
