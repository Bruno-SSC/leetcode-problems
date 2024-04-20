var twoSum = function (nums, target) {
  let res = [];


  // ? would it be done without nested iterators?

  for (let c = 0; c < nums.length; c++) {
    let n1 = nums[c];
    res[0] = c;

    for (let i = c + 1; i < nums.length; i++) {
      let n2 = nums[i];
      if (n1 + n2 === target) {
        res[1] = i;
        return res;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
