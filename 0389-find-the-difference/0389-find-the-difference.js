/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sArr = s.split("").sort();
    const tArr = t.split("").sort();
    
    for(let i=0;i<tArr.length;i++){
        if(sArr[i]!==tArr[i]) return tArr[i]
    }
};