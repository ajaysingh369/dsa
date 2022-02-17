/**
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Ex1
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Ex2
Input: nums = [5,4,-1,7,8]
Output: 23

Ex3
Input: nums = [1]
Output: 1

Ex4
Input: [-2,-1,-3,-4,-5]
-1
*/

function maxSubArray(nums) {
    // solution here
    let max = -Infinity;
    let sum = nums[0];
    for (let i = 1; i < nums.length; ++i) {
      sum = Math.max(nums[i] + sum, nums[i]);
      max = Math.max(sum, max)
    }
    return max = Math.max(sum, max);
  }
  
  console.log('maxSubArray', maxSubArray([-5,-4,-1,-7,-8, 0]));
  console.log('maxSubArray: [5,4,-1,7,8] :: 23 :: ', maxSubArray([5,4,-1,7,8]));
  console.log('maxSubArray: [1] :: 1 :: ', maxSubArray([1]));
  console.log('maxSubArray: [-2,1,-3,4,-1,2,1,-5,4]:: 6:: ', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
