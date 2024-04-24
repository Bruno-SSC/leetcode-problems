var isPerfectSquare = function (num) {
  return !String(num ** 0.5).includes(".");
};

console.log(isPerfectSquare(195));

/* 
String() without the "new" transforms the param into a primitive string
** is the "power of" operator
raising a number to a fraction works like a root, 1/2 is the square root, 1/3 would be the cube root of a number
includes(".") checks if the square root of the number has a ".", which would mean it's square root is a float
? https://sciencing.com/happens-raise-number-fraction-8535078.html
*/
