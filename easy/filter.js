
// explanations

// https://leetcode.com/problems/filter-elements-from-array/solutions/3502864/day5-different-approaches-with-beginner-friendly-explanation-ts-js/

const case1 = [0, 10, 20, 30];
const greaterThan10 = (n) => {
  return n > 10;
};

const case2 = [1, 2, 3];
const firstIndex = (n, i) => {
  return i === 0;
};

const case3 = [-2, -1, 0, 1, 2];
const plusOne = (n) => {
  return n + 1;
};

var filter = function (arr, fn) {
  let res = [];
  for (let x = 0; x < arr.length; x++) {
    if (fn(arr[x], x)) {
      res.push(arr[x]);
    }
  }
  return res;
};

const test1 = filter(case1, greaterThan10);
console.log("teste 1: " + test1);

const test2 = filter(case2, firstIndex);
console.log("teste 2: " + test2);

const test3 = filter(case3, plusOne);
console.log("teste 3: " + test3);
