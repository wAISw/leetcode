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
var reverseString = function (str) {
    for (let i = 0; i < str.length; i++) {
        const opositeIndex = str.length - i - 1;
        const val = str[i];
        const opositeVal = str[opositeIndex];
        if (opositeIndex === i || i > opositeIndex) {
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
var minimum = -Math.pow(2, 31);
var maximum = Math.pow(2, 31) - 1;
var reverse = function (x) {
    const reversedX = `${Math.abs(x)}`.split('').reverse().join('') * (x < 0 ? -1 : 1);
    if (reversedX < minimum || reversedX > maximum) {
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
var firstUniqChar = function (s) {
    const hash = {};
    const sArr = s.split('');
    sArr.forEach((letter) => {
        hash[letter] = (hash[letter] || 0) + 1;
    })
    for (let i = 0; i < sArr.length; i++) {
        const letter = sArr[i];
        if (hash[letter] === 1) {
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
var isAnagram = function (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};

// WRONG 
var isAnagram2 = function (s, t) {
    let sum = 0;
    s.split('').forEach((letter) => {
        sum += letter.charCodeAt();
    });
    t.split('').forEach((letter) => {
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
var isPalindrome = function (s) {
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


// String to Integer (atoi)
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
// The algorithm for myAtoi(string s) is as follows:
// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
//
// Note:
// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

/**
 * @param {string} s
 * @return {number}
 */
var minimum = -Math.pow(2, 31);
var maximum = Math.pow(2, 31) - 1;
var myAtoi = function (s) {
    let isPresent = null;
    let res = [];
    for (let i = 0; i < s.split('').length; i++) {
        const letter = s[i];
        if (letter === ' ') {
            if(res.length || isPresent!==null){
                break;
            }
            continue;
        }
        if (res.length === 0 && letter != +letter) {
            if(isPresent !== null){
                return 0
            }
            if(letter === '-') {
                isPresent = false;
                continue;
            }
            if(letter === '+'){
                isPresent = true;
                continue;
            }
        }
        if (letter != +letter) {
            if (res.length < 1) {
                return 0;
            } else {
                break;
            }
        }
        if (letter == +letter) {
            res.push(letter);
        }
    }

    res = +res.join('') * (isPresent || isPresent==null ? 1 : -1);

    if (res < minimum) {
        return minimum;
    }
    if (res > maximum) {
        return maximum;
    }
    return res;
};
var myAtoi2 = function(s) {
    s =s.trim().split(' ')[0]
    s = s.match(/^[\+,\-]?\d+/)
    return Math.min(Math.max(s, Math.pow(2,31)*-1), Math.pow(2,31)-1)
};

// GOD MODE
const myAtoi3 = (s) => {
    const i = (m=> m ? +m : 0)(s.match(/^\s*[+-]?\d+/));
    return i < -1*2**31 ? -1*2**31 : i > 2**31-1 ? 2**31-1 : i;
};
// tests
// const arr = [
//     ["42", 42],
//     ["   -42", -42],
//     ["4193 with words", 4193],
//     ["words and 987", 0],
//     ["   -42", -42],
//     ["3.14159", 3],
//     ["+1", 1],
//     ["+-12", 0],
//     ["   +0 123", 0],
//     ["  +  413", 0]
// ];
// arr.forEach(([s, answer]) => {
//     const res = myAtoi3(s);
//     if (res === answer) {
//         console.log('res', res, 'expected', answer, 'passed');
//     } else {
//         console.log('res', res);
//         console.log('exp', answer);
//         console.log('failed');
//     }
// })


// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// tests
// const arr = [
// {
//     haystack: "hello",
//     needle: "ll",
//     output: 2
// },
// {
//     haystack: "aaaaa",
//     needle: "bba",
//     output:-1,
// },
// {
//     haystack: "",
//     needle: "",
//     output: 0
// },
// ];
// arr.forEach(({haystack, needle, output}) => {
//     const res = strStr(haystack, needle);
//     if (res === output) {
//         console.log('res', res, 'expected', output, 'passed');
//     } else {
//         console.log('res', res);
//         console.log('exp', output);
//         console.log('failed');
//     }
// })


// Count and Say
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":
// Output 23321511
// Given a positive integer n, return the nth term of the count-and-say sequence.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    console.log(n);
    if(n === 1){
        return '1';
    }
    return countAndSay(n-1);
};

// tests
const arr = [
    {
        n: 1,
        output: "1"
    },
    {
        n: 4,
        output: "1211"
        // Explanation:
        // countAndSay(1) = "1"
        // countAndSay(2) = say "1" = one 1 = "11"
        // countAndSay(3) = say "11" = two 1's = "21"
        // countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
    }
]
arr.forEach(({n, output}) => {
    const res = countAndSay(n);
    if (res === output) {
        console.log('res', res, 'expected', output, 'passed');
    } else {
        console.log('res', res);
        console.log('exp', output);
        console.log('failed');
    }
})

