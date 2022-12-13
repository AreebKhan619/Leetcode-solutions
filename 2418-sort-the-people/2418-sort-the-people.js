/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const newArr = []

  names.forEach((name,idx)=>{
    newArr.push({
      name,
      height: heights[idx]
    })
  })

  return newArr.sort((x,y)=>y.height - x.height).map(el=>el.name)
};
