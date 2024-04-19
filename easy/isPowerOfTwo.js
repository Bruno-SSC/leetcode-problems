// TODO: Given an integer n, return true if it is a power of two. Otherwise, return false.

var isPowerOfTwo = function (n, expo = 0) {
  let pow = Math.pow(2, expo);
  if (pow === n) {
    return true;
  }

  if (pow > n) return false;
  return isPowerOfTwo(n, expo + 1);
};

console.log(isPowerOfTwo(8));

// ? Could you solve it without loops/recursion?
