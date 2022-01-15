/**
Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/
function removeDuplicates(nums) {
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] == nums[i+1]) nums.splice(i, 1)
    }
    return nums.length;
};
// var nums = [1, 1, 2];
// console.log(removeDuplicates(nums), nums);

/**
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]){
            maxprofit += prices[i] - prices[i - 1];
        }
    }
    return maxprofit;    
};

// let prices = [7,1,5,3,6,4];
// maxProfit(prices);


/**
Given an array, rotate the array to the right by k steps, where k is non-negative.
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

==========
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k>nums.length){
        k = k-nums.length;
    }
    nums.slice(nums.length - k)
    .concat(nums.slice(0, nums.length - k))
    .forEach((v,i)=>{
        nums[i]=v
    })

    // while(k>0){
    //     const j = nums.pop();
    //     nums.unshift(j);
    //     k--;
    // }
};

// // tests
// [
//     [[1,2,3,4,5,6,7], 3],
//     [[-1,-100,3,99], 2],
//     [[1,2], 5]
// ].forEach(([nums, k])=>{
//     console.log('%cArray.js line:84 nums, k', 'color: white; background-color: gray;', nums, k);
//     rotate(nums, k);
//     console.log(nums);
// })

/**
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return (new Set(nums)).size !== nums.length;
};

var containsDuplicate2 = function(nums) {
    const set = new Set();
    for (const num of nums) {
        if(set.has(num)){
            return true
        }
        set.add(num);
    }
    return false;
};
// tests
// [
//     [[1,2,3,1], true],
//     [[1,2,3,4], false],
//     [[1,1,1,3,3,4,3,2,4,2], true]
// ].forEach(([nums, answer])=>{
//     if(containsDuplicate2(nums) === answer){
//         console.log(nums, 'passed');
//     }else{
//         console.log(nums, 'failed');
//     }
// })



/**
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = nums.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    for (const key in obj) {
        if(obj[key] === 1){
            return key;
        }
    }
};

var singleNumber2 = function(nums) {
    let xor = 0;
    for (let i of nums) {
        xor ^= i;
        console.log(xor, i);
    }
    return xor;
}
// tests
// const arr = [
//     [[2, 2, 1], 1],
//     [[4, 1, 2, 1, 2], 4],
//     [[1], 1]
// ];
// console.log(arr);
// arr.forEach(([nums, answer])=>{
//     if(singleNumber2(nums) == answer){
//         console.log(nums, 'passed');
//     }else{
//         console.log(nums, 'failed with', singleNumber2(nums));
//     }
// })

/**
 Intersection of Two Arrays II

Solution
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const numsObj = nums2.reduce((acc, i)=>{
        acc[i] = (acc[i] || 0) + 1;
        return acc;
    }, {});

    return nums1.reduce((acc, i)=>{
        if(numsObj[i]){
            acc.push(i);
            numsObj[i] = numsObj[i]-1
        }
        return acc;
    }, []);
};
// tests
// const arr = [
//     [[1,2,2,1], [2,2], [2,2]],
//     [[4,9,5], [9,4,9,8,4], [4,9]],
//     [[3,1,2], [1,1], [1]]
// ];
// arr.forEach(([nums1, nums2, answer])=>{
//     const res = intersect(nums1, nums2);
//     if(res.join('') == answer.join('')){
//         console.log(nums1, nums2, 'passed with', res);
//     }else{
//         console.log(nums1, nums2, 'failed with', res);
//     }
// })



/**
 Plus One

Solution
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits, i) {
    if(i === -1){
        return [1, ...digits];
    }
    i = i !== undefined ? i : digits.length-1; // 1
    if(digits[i]+1<10){
        digits[i] = digits[i] + 1;
        return digits;
    }else{
        digits[i] = 0;
        return plusOne(digits, i-1);
    }
};
// tests
// const arr = [
//     [[1,2,3], [1,2,4]],
//     [[4,3,2,1],[4,3,2,2]],
//     [[9], [1,0]],
//     [[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3],[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]],
//     [[9,9], [1,0,0]],
// ];
// arr.forEach(([nums, answer])=>{
//     const res = plusOne(nums);
//     if(res.join('') == answer.join('')){
//         console.log(nums, 'passed with', res);
//     }else{
//         console.log(nums, 'failed with', res);
//     }
// })

/**
Move Zeroes

Solution
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const length = nums.length;
    for (let i = length-1; i >= 0; i--) {
        if(!nums[i]){
           nums.push(nums[i]);
           nums.splice(i, 1);
        }
    }
};
// tests
// const arr = [
//     [[0,1,0,3,12], [1,3,12,0,0]],
//     [[0],[0]],
//     [[0,0,1], [1,0,0]]
// ];
// arr.forEach(([nums, answer])=>{
//     moveZeroes(nums);
//     if(nums.join('') == answer.join('')){
//         console.log(nums, 'passed');
//     }else{
//         console.log(nums, 'failed',);
//     }
// })

/**
Two Sum

Solution
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = nums.length-1; i >= 0; i--) {
        const cur = nums[i]
        for (let j = nums.length-1; j >= 0; j--) {
            if(i === j){
                continue;
            }
            if(cur + nums[j] === target){
                return [j,i];
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
    const hash = {};
    let result = [];
    
    for (let i = nums.length-1; i >= 0; i--) {
        const diff = target - nums[i];
      if (hash.hasOwnProperty(diff)) {
          result = [i, hash[diff]];
          break;
      }
        hash[nums[i]] = i
    }
    
    return result
};
// tests
// const arr = [
//     [[2,7,11,15], 9, [0,1]],
//     [[3,2,4], 6, [1,2]],
//     [[3,3], 6, [0,1]],
//     [[-1,-2,-3,-4,-5], -8, [2,4]]
// ];
// arr.forEach(([nums, target, answer])=>{
//     const res = twoSum2(nums, target);
//     if(res.join('') == answer.join('')){
//         console.log('res', res, 'expected', answer, 'passed');
//     }else{
//         console.log('res', res, 'expected', answer,'failed',);
//     }
// })