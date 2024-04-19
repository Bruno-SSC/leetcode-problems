let fn = (a, b, c) => a + b + c;

var once = function (fn) {
  let maxCall = 1;

  return function (...args) {
    if (maxCall > 1) return undefined;
    let res = fn(...args);
    maxCall++;
    return res;
  };
};

let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

let fn2 = (a, b, c) => a * b * c;

onceFn = once(fn2);

console.log(onceFn(5, 7, 4)); // 140
console.log(onceFn(2, 3, 6)); // undefined, fn was not called
console.log(onceFn(4, 6, 8)); // undefined, fn was not called
