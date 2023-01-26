"use strict";
function runningSum(nums) {
  let total = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result.push(total);
  }
  return result;
}
;
//# sourceMappingURL=sumOf1DArray.js.map
