const case1 = [1, 2, 3];
const case2 = [1, 2, 3];
const case3 = [10, 20, 30];

function plusone(n) {
  return n + 1;
}

function plusI(n, i) {
  return n + i;
}

function constant() {
  return 42;
}

var map = function (arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }

  return result;
};

const output1 = map(case1, plusone);
console.log(output1);

const output2 = map(case2, plusI);
console.log(output2);

const output3 = map(case3, constant);
console.log(output3);
