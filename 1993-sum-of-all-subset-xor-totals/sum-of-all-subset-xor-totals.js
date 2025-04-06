/**
 * @param {number[]} nums
 * @return {number}
 */
function subsetXORSum(nums) {
  let total = 0;

  function dfs(index, currentXOR) {
    if (index === nums.length) {
      total += currentXOR;
      return;
    }

    // Include nums[index] in XOR
    dfs(index + 1, currentXOR ^ nums[index]);

    // Exclude nums[index]
    dfs(index + 1, currentXOR);
  }

  dfs(0, 0);
  return total;
}
