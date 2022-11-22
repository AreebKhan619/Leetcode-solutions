/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
  const pairMap = {}
   
  for(el of arr){
     if(pairMap[el]) delete pairMap[el]
     else pairMap[el] = true
  }  

  return Object.keys(pairMap)[0]
};