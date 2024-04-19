class ArrayWrapper {
  constructor(nums) {
    this.string = JSON.stringify(nums);
    this.numSum = nums.reduce((acc, curr) => acc + curr, 0);
  }

  valueOf() {
    return this.numSum;
  }

  toString() {
    return this.string;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
