/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 *
 *
 * 示例 1:
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 思路：循环右移，不断将数组尾放置于数组头
 */
function moveArray(arr, k) {
  for(let i = 0; i < k; i ++) {
    arr.unshift(arr.pop())
  }
  return arr
}
console.log(moveArray([1,2,3,4,5,6,7], 3))
