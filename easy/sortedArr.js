// FIXME: unfinished code

// arr is a valid JSON array
// fn is a function that returns a number
// 1 <= arr.length <= 5 * 105

/* 

- Given an array arr and a function fn, return a sorted array sortedArr. 

- You can assume fn only returns numbers and those numbers in ascending order determine the sort of sortedArr. 

- You may assume that fn will never duplicate numbers for a given array.
# o que significa sem indexes duplicados, caso eu siga esse caminho.

 */

/* 

A fn aplicada a cada elemento do arr retorna um número

Esses números precisam estar em ordem crescente

O resultado é usado como referencia para organizar o array original

ideia: isso é um espelho. Os resultados de fn são conectados ao array original. Talvez eu possa, ao ordenar em ordem crescente os resultados, ordenar subliminarmente o array original nas mesmas regras.

*/

// só vou usar a ordem para ordenar o arr, depois eu posso ficar só com ele ao invés de ter um sortedArr inútil

var sortBy = function (arr, fn) {
  let sortedArr = [...arr];
  let order = arr.map(fn);
  let ascending = [];

  for (let i = order.length - 1; i >= 0; i--) {}

  console.log(ascending);

  return sortedArr;
};

//sortBy([5, 4, 1, 2, 3], (x) => x);
sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x);

/* 
SECTION: merge/quick sort (mathematical)

https://leetcode.com/problems/sort-by/solutions/3695937/using-merge-sort-quick-sort/
*/
