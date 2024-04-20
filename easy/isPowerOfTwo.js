// TODO: Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

// ? 2 elevado a algum numero === n ?  true : false.

var isPowerOfTwo = function (n, expo = 0) {
  let pow = Math.pow(2, expo);
  if (pow === n) {
    return true;
  }

  if (pow > n) return false;
  return isPowerOfTwo(n, expo + 1);
};

// ? Could you solve it without loops/recursion?

var isPowerOfTwo = function (n) {
  /* 
 toString(2) turns the number into it's binary representation
 
 a number binary representation is achievable by sequentially dividing the number always notating the remainder
 
 every binary representation of a power of two has the same pattern "1000"

 pow(2, 0) = 1 => binary = 1
 pow(2, 1) = 2 => binary = 10
 pow(2, 2) = 4 => binary = 100
 pow(2, 3) = 8 => binary = 100
 
 by removing the first "1", the left over must be only "0" digits to assure it's a power of two number.

 otherwise, false.

  */
  return n < 1 ? false : n.toString(2).slice(1).includes("1") ? false : true;
};

isPowerOfTwo(6);
