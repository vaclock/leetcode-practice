/*
* 459.重复的子字符串 
* 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
*  
* 示例 1:
* 输入: s = "abab"
* 输出: true
* 解释: 可由子串 "ab" 重复两次构成。
* 示例 2:
* 输入: s = "aba"
* 输出: false
* 示例 3:
* 输入: s = "abcabcabcabc"
* 输出: true
* 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
*  
* 提示：
* 	1 <= s.length <= 104
* 	s 由小写英文字母组成
* 
*/


// @QUESTION_START
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // abab
  // bababa
  return (s.slice(1) + s.slice(0, -1)).includes(s)
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  repeatedSubstringPattern,
  {
    data: [[  "abab"],[  "aba"],[  "abcabcabcabc"]],
    structure: ["string"]
  },
  {
    data: [ true, false, true],
    structure: ["boolean"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/repeated-substring-pattern/');
