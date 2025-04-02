/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return indices of the complement and current number
        }
        numMap.set(nums[i], i); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};