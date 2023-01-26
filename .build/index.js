"use strict";
function deleteGreatestValue(grid) {
  let arr = [];
  for (let k = 0; k <= grid.length; k++) {
    let temp = [];
    for (let i = 0; i < grid.length; i++) {
      let max = 0;
      for (let j = 0; j < grid[i].length; j++) {
        max = Math.max(max, grid[i][j]);
      }
      console.log(max);
      temp.push(max);
      grid[i].splice(grid[i].indexOf(max), 1);
      if (grid[i].length > 0) {
        k = 0;
      }
    }
    arr.push(Math.max(...temp));
  }
  return arr.reduce((pv, cv) => pv + cv, 0);
}
;
console.log(deleteGreatestValue([[11, 2, 4], [8, 3, 1]]));
//# sourceMappingURL=index.js.map
