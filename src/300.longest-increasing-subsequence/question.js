/*
* 300.最长递增子序列 
* 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
* 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
*  
* 示例 1：
* 输入：nums = [10,9,2,5,3,7,101,18]
* 输出：4
* 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
* 示例 2：
* 输入：nums = [0,1,0,3,2,3]
* 输出：4
* 示例 3：
* 输入：nums = [7,7,7,7,7,7,7]
* 输出：1
*  
* 提示：
* 	1 <= nums.length <= 2500
* 	-104 <= nums[i] <= 104
*  
* 进阶：
* 	你能将算法的时间复杂度降低到 O(n log(n)) 吗?
* 
*/


// @QUESTION_START
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // dp[i]代表以i结尾时，递增最长为dp[i]
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp);
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  lengthOfLIS,
  {
    data: [[ [10,9,2,5,3,7,101,18]],[ [0,1,0,3,2,3]],[ [7,7,7,7,7,7,7]]],
    structure: ["number[]"]
  },
  {
    data: [4,4,1],
    structure: ["number"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/longest-increasing-subsequence/');
