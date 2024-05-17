/* 

TODO: Given a roman numeral, convert it to an integer.

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Roman numerals are usually written largest to smallest from left to right. 

However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

* Assumptions

I have to write convert in the opposite order, which is right to left from the smallest to biggest.

? reduce is a way to go? I'm reducing a number to only one integer acc
*/

/*  
TODO: 

There is a way of doing it by subtracting the curr by the next if the next is bigger than curr. Think about it.

This one is also big brain:

function romanToInt(s: string): number {
  const integers = s.split('').map(c => roman[c]);
  
  return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
};

*/

var romanToInt = function (s) {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let pairs = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let index = 0;
  let sum = 0;
  s = Array.from(s);

  while (index < s.length) {
    let curr = s[index];
    let next = s[index + 1];

    if (pairs[curr + next]) {
      sum += pairs[curr + next];
      index += 2;
      continue;
    }

    sum += symbols[curr];
    index += 1;
  }
  return sum;
};

//romanToInt("III");
//romanToInt("LVIII");
romanToInt("MCMXCIV");
