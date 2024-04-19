let nums = [1, 2, 3, 4];

let fn = function sum(accum, curr) {
  return accum + curr;
};

let fn2 = function sum(accum, curr) {
  return accum + curr * curr;
};

let init = 0;
let init2 = 100;

var reduce = function (nums, fn, init) {
  let final = init;

  nums.forEach((n) => {
    final = fn(final, n);
  });

  return final;
};

console.log(reduce(nums, fn, init));
console.log(reduce(nums, fn2, init2));
