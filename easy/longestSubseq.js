/* 
TODO: 

para cada queries[i], eu preciso achar elementos dentro de nums[i] e adicionar eles em subseq[] de forma que 

os subseq[i] somados sejam menores ou iguais ao valor queries[i] corrente
 
Ao atingir o máximo possível de elementos no subseq[], a lenght de subseq é registrada em answer[i] respectivo ao index da querie corrente 

* Assumptions:

o arr "subseq" não precisa existir. Eu só preciso manter a soma e o contador de elementos adicionados.

Não preciso manter queries, dá para remover de forma definitiva os elementos. Exemplo, eu posso ter iterações com o primeiro queries[i] até atingir a cota, daí eu uso unshift para pegar o próximo, tudo em um único loop.

O máximo de combinações possíveis é atingido fazendo a soma dos menores nums[i] primeiro.

Mesmo com o número e a soma menores que o target, não significa que a soma posteriormente a adição será menor ou igual.

! ONDE PAREI

PARECE que existem conhecimentos que eu não tenho e são necessários para resolver esse problema. Resumidamente a lógica funciona, mas a implementação requer certos conceitos de estrutura de dados que eu não conheço para que fique suficientemente eficiente.

*/

// nums = [4,5,2,1], queries = [3,10,21]

var answerQueries = function (nums, queries) {
  let answer = [];
  //nums = nums.sort((a, b) => a - b);
  let iterations = queries.length * nums.length;
  let targetValue = queries.shift();
  let sum = 0;
  let length = 0;

  let index = 0;
  for (let i = 0; i < iterations; i++) {
    if (sum + nums[index] <= targetValue) {
      sum += nums[index];
      length++;
      console.log(nums[index], sum);
    }

    index++;

    if (index === nums.length) {
      answer.push(length);
      index = 0;
      sum = 0;
      length = 0;
      targetValue = queries.shift();
    }
  }

  return answer;
};

let nums = [
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];

let queries = [
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000,
  1000000,
];

//answerQueries(nums, queries);