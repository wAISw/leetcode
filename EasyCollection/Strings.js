// Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
    for (let i = 0; i < str.length; i++) {
        const opositeIndex = str.length-i-1;
        const val = str[i];
        const opositeVal = str[opositeIndex];
        if(opositeIndex === i || i > opositeIndex){
            return;
        }
        str[i] = opositeVal;
        str[opositeIndex] = val;
    }
};

// tests
// const arr = [
//     [
//         ["h","e","l","l","o"], // input
//         ["o","l","l","e","h"] // output
//     ],
//     [
//         ["H","a","n","n","a","h"], // input
//         ["h","a","n","n","a","H"] // output
//     ],
//     [
//         ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"],
//         ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
//     ]
// ];
// arr.forEach(([str, answer])=>{
//     reverseString(str);
//     if(JSON.stringify(str) == JSON.stringify(answer)){
//         console.log('res', str.join(''), 'expected', answer.join(''), 'passed');
//     }else{
//         console.log('res', str.join(''));
//         console.log('exp', answer.join(''));
//         console.log('failed');
//     }
// })


// Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Constraints:

// -2^31 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {number}
 */
const minimum = -Math.pow(2, 31);
const maximum = Math.pow(2, 31) - 1;
var reverse = function(x) {
    const reversedX = `${Math.abs(x)}`.split('').reverse().join('') * (x<0 ? -1 : 1);
    if(reversedX < minimum || reversedX > maximum){
        return 0;
    }
    return reversedX;
};

// tests
// const arr = [
//     [
//         123, // input
//         321 // output
//     ],
//     [
//         -123, // input
//         -321 // output
//     ],
//     [
//         120,
//         21
//     ],
//     [
//         1534236469,
//         0
//     ]
// ];
// arr.forEach(([num, answer])=>{
//     const res = reverse(num);
//     if(res == answer){
//         console.log('res', res, 'expected', answer, 'passed');
//     }else{
//         console.log('res', res);
//         console.log('exp', answer);
//         console.log('failed');
//     }
// })


// First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash = {};
    const sArr = s.split('');
    sArr.forEach((letter)=>{
        hash[letter] = (hash[letter] || 0) + 1;
    })
    for (let i = 0; i < sArr.length; i++) {
        const letter = sArr[i];
         if(hash[letter] === 1){
            return i
        }
    }
    return -1;
};

// tests
// const arr = [
//     [
//         "leetcode",
//         0
//     ],
//     [
//         "loveleetcode",
//         2
//     ],
//     [
//         "aabb",
//         -1
//     ],
//     [
//         "dddccdbba",
//         8
//     ]
// ];
// arr.forEach(([str, answer])=>{
//     const res = firstUniqChar(str);
//     if(res == answer){
//         console.log('res', res, 'expected', answer, 'passed');
//     }else{
//         console.log('res', res);
//         console.log('exp', answer);
//         console.log('failed');
//     }
// })



// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};

// WRONG 
var isAnagram2 = function(s, t) {
    let sum = 0;
    s.split('').forEach((letter)=>{
        sum += letter.charCodeAt();
    });
    t.split('').forEach((letter)=>{
        sum -= letter.charCodeAt();
    });
    return !sum;
};

// tests
// const arr = [
//     [ "anagram", "nagaram", true ],
//     [ "rat", "car", false ],
//     [ "ac", "bb", false]
// ];
// arr.forEach(([s, t, answer])=>{
//     const res = isAnagram(s, t);
//     if(res == answer){
//         console.log('res', res, 'expected', answer, 'passed');
//     }else{
//         console.log('res', res);
//         console.log('exp', answer);
//         console.log('failed');
//     }
// })


// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const formattedS = s.replace(/[\W_]/gi, '').toLowerCase();
    return formattedS === formattedS.split('').reverse().join('');
};

// tests
// const arr = [
//     ["A man, a plan, a canal: Panama", true],
//     ["race a car", false],
//     [" ", true],
//     ["ab_a", true]
// ];
// arr.forEach(([s, answer])=>{
//     const res = isPalindrome(s);
//     if(res == answer){
//         console.log('res', res, 'expected', answer, 'passed');
//     }else{
//         console.log('res', res);
//         console.log('exp', answer);
//         console.log('failed');
//     }
// })
