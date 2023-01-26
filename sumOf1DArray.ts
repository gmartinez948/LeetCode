/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

function runningSum(nums: number[]): number[] {
    let total: number = 0
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        result.push(total)
    }
    return result;
};