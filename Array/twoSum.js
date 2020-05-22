/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 示例:
 *
 *给定 nums = [2, 7, 11, 15], target = 9
 *
 *因为 nums[0] + nums[1] = 2 + 7 = 9
 *所以返回 [0, 1]
 */

//思路：取出一个值1，用target减去值1得到值2，判断数组余下的值有没有值2
function twoSum(nums,target) {
  if(nums.length < 2){return}
  for(let i = 0; i < nums.length; i++){
    let num1 = nums[i]
    let num2 = target - num1
    for(let j = i + 1; j < nums.length; j++){
      if(nums[j] === num2){
        return [i,j]
      }
    }
  }
}


//for test
let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums,target))