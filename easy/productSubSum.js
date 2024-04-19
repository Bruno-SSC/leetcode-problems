// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

/* 
var subtractProductAndSum = function (n) {
  n = Array.from(n.toString()).map((val) => Number(val));
  let product = n.reduce((acc, curr) => curr * acc);
  let sum = n.reduce((acc, curr) => acc + curr);
  return product - sum;
}; 
*/

var subtractProductAndSum = function (n) {
  let pro = 1;
  let sum = 0;

  while (n > 0) {
    const dig = n % 10;

    // divindindo por 10 ele volta uma virgula a esquerda nas casa decimais
    // se tu colocar a divisão em prática no papel, o número a direita da virgula é o resto(remainder) da operação

    pro *= dig;
    sum += dig;
    n = Math.floor(n / 10);
  }

  return pro - sum;
};

subtractProductAndSum(234);

//console.log(subtractProductAndSum(234));
//console.log(subtractProductAndSum(4421));
//console.log(subtractProductAndSum(114));
