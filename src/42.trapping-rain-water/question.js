/*
* 42.接雨水 
* 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
*  
* 示例 1：
* 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
* 输出：6
* 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
* 示例 2：
* 输入：height = [4,2,0,3,2,5]
* 输出：9
*  
* 提示：
* 	n == height.length
* 	1 <= n <= 2 * 104
* 	0 <= height[i] <= 105
* 
*/


// @QUESTION_START
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length <= 2) return 0
  // height
  let count = 0
  let stack = []
  stack.push(0)
  /**
   * 
   * [0,1,0,2,1,0,1,3,2,1,2,1]
   * 
   */
  for (let i = 1; i < height.length; i++) {
    if (height[i] < height[stack[stack.length - 1]]) {
      stack.push(i)
      continue
    } else if (height[i] === height[stack[stack.length - 1]]) {
      stack.pop()
      stack.push(i)
    } else {
      // cur: r
      while(stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
        let mid = stack.pop()
        if (stack.length > 0) {
          let w = i - stack[stack.length - 1] - 1
          let h = Math.min(height[i], height[stack[stack.length - 1]]) - height[mid]
          count += w * h
        }
      }
      stack.push(i)
    }
  }
  return count
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  trap,
  {
    data: [[ [0,1,0,2,1,0,1,3,2,1,2,1]],[ [4,2,0,3,2,5]]],
    structure: ["number[]"]
  },
  {
    data: [6,9],
    structure: ["number"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/trapping-rain-water/');
