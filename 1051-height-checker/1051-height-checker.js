/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const copy = heights.slice();
    copy.sort((x,y)=>x-y);
    let invalids = 0;
    
    for(let i in copy){
        if(copy[i]!==heights[i]) invalids++
    }
    
    return invalids
};