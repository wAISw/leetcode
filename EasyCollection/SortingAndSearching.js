// Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
//
// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//
// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
//
// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
//
// Constraints:
//
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const nums1Copy = [...nums1];
  let i = 0;
  while ((m > 0 || n > 0) && i <= nums1.length) {
    if (m <= 0 && n > 0) {
      nums1[i] = nums2.shift();
      n--;
      i++;
      continue;
    }
    if (m > 0 && n <= 0) {
      nums1[i] = nums1Copy.shift();
      m--;
      i++;
      continue;
    }

    const a = nums1Copy[0];
    const b = nums2[0];
    if (a < b) {
      nums1[i] = nums1Copy.shift();
      m--;
    } else {
      nums1[i] = nums2.shift();
      n--;
    }
    i++;
  }
};


// tests
[{
  Input: {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
  },
  Output: [1, 2, 2, 3, 5, 6],
}, {
  Input: {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
  },
  Output: [1],
}, {
  Input: {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
  },
  Output: [1],
}, {
  Input: {
    nums1: [2, 0],
    m: 1,
    nums2: [1],
    n: 1,
  },
  Output: [1, 2],
}].forEach(({ Input, Output }) => {
  merge(...Object.values(Input));
  if (JSON.stringify(Input.nums1) === JSON.stringify(Output)) {
    console.log(Output, 'passed');
  } else {
    console.log('res', Input.nums1);
    console.log('exp', Output);
    console.log('failed');
  }
});


// First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
//
//
//
// Example 1:
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
//
// Example 2:
// Input: n = 1, bad = 1
// Output: 1
//

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let cur = Math.floor((right + left) / 2);
      [right, left] = isBadVersion(cur) ? [cur, left] : [right, ++cur];
    }
    return left;
  };
};
