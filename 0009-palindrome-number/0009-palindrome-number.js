/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    for(var i=0;i<x.length;i++){
     if(x[i]!==x[x.length - i -1])return false
    }
    return true
};
