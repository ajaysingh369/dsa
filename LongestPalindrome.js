/**
Given a string s, return the length of the longest palindrome that can be built with those letters.

Input: "abccccdd"
Output: 7
longest palindrome that can be built is "dccaccd", whose length is 7.

Input: "a"
Output: 1

Input: "bb"
Output: 2
*/

function longestPalindrome(str) {
    const charList = {};
    for (let i = 0; i < str.length; i += 1) {
        if (!charList[str[i]]) charList[str[i]] = 1;
        else charList[str[i]]++;
    }
    console.log(charList);
    const allKeys = Object.keys(charList);
    let odd = 0;
    let total = 0;
    
    for (let i = 0; i < allKeys.length; ++i) {
        const key = allKeys[i];
        const count = charList[key];
        if (count % 2 === 0) {
            total += count;
        } else {
            odd = Math.max(odd, count);
        }
    }
    return total + odd;
}
  
console.log('longestPalindrome: abbbccccdd :: ', longestPalindrome('abbbccccdd')); //9
console.log('longestPalindrome: abccccdd ::', longestPalindrome('abccccdd'));  //7
console.log('longestPalindrome: a ::', longestPalindrome('a')); //1
console.log('longestPalindrome: bb::', longestPalindrome('bb')); //2
  