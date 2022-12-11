/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;
  const elFreq = {};
  nums.forEach(num=>{
    elFreq[num] = (elFreq[num] || 0) +1
  })

  Object.keys(elFreq).forEach(num=>{
    if(elFreq[num]<2){
      sum = sum + parseInt(num);
    }
  })
  return sum;
};