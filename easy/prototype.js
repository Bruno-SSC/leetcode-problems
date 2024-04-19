Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
const arr2 = [];

console.log(arr.last());
console.log(arr2.last());
