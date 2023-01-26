"use strict";
function deleteGreatestValue(grid) {
  let counter = 0;
  let tempArray = [];
  let i = 0;
  let copy = grid[0];
  while (i < copy.length) {
    tempArray = [];
    for (let i2 = 0; i2 < grid.length; i2++) {
      let sorted = grid[i2].sort((a, b) => a - b);
      console.log(sorted);
      tempArray.push(sorted.pop());
    }
    counter += Math.max(...tempArray);
    i++;
  }
  return counter;
}
;
console.log(deleteGreatestValue([[11, 2, 4], [8, 3, 1]]));
//# sourceMappingURL=index.js.map
