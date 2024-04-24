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

/*  
doing: 

- Use the values on "s" as keys to a collections of "values for convertion"
- build pair per iteration from the chars
- check wether a pair exist, if not check the same only with the right side of the pair
- add to the sum

! Tá quebrando os pares. [IIIIV] => ele faz "II", "II", "V" ao invés de "II", "I", "IV".

? Isso tá com cara de uma boa oportunidade para usar regEx

? verificar se o próximo elemento não forma um par com s2?

? Identificar os pares primeiro usando uma pesquisa como findindex

? Transformar o array "s" em um objeto key-value?

*/

var romanToInt = function (s) {
  let sum = 0;
  let index = 0;

  while (true) {
    let s1 = s[index];
    let s2 = s[index + 1];
    let key = s2 ? s1 + s2 : s1;

    if (typeof key != "string") break;

    console.log(key);

    if (pairs[key]) sum += pairs[key];
    if (key.length > 1 && !pairs[key]) sum += symbols[key[0]] + symbols[key[1]];
    if (key.length === 1) sum += symbols[key];

    index += 2;
    if (index >= 10) break;
  }

  console.log(sum);
  return sum;
};

//romanToInt("III");
//romanToInt("LVIII");
romanToInt("MCMXCIV");
