/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((arr, idx)=>{
    return arr.map((el, jdx)=>{
      return Number(!(arr[arr.length - 1 - jdx]))
    })
  })
};