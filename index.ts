

function deleteGreatestValue(grid: number[][]): number {
  let counter: number = 0; 
  let tempArray: number[] = [];
  let i = 0;
  let copy: number[] = grid[0];
  while (i < copy.length) {
    tempArray = [];
    for (let i = 0; i < grid.length; i++) {
      let sorted = grid[i].sort((a, b) => a - b);
      console.log(sorted)
      tempArray.push(sorted.pop())
    }
    counter += Math.max(...tempArray);
    i++;
  }
  return counter;
};

console.log(deleteGreatestValue([[11,2,4],[8,3,1]]))

// 11, 8 / 4, 3 / 2, 1