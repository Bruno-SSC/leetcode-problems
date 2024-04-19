// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  let reversed = Array.from(x.toString()).reverse().join("");
  return reversed == x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


/* SECTION: mathematical solutions

https://leetcode.com/problems/palindrome-number/solutions/2499161/99-22-javascript-dart-without-converting-the-integer-to-a-string/


https://leetcode.com/problems/palindrome-number/solutions/2732678/js-91-45-no-string/

https://leetcode.com/problems/palindrome-number/solutions/2658882/solving-it-without-using-string-in-javascript/

var isPalindrome = function(x) {
  if (x < 0) return false

  let rev = 0
  for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
  return rev === x
};
*/