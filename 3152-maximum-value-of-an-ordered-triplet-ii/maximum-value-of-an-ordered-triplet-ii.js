/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxTriplet = 0
    let maxElement = 0
    let maxDiff = 0

    for (let num of nums) {
    maxTriplet = Math.max(maxTriplet, maxDiff * num);
    maxDiff = Math.max(maxDiff, maxElement - num);
    maxElement = Math.max(maxElement, num);
    }

    return maxTriplet;
   
};