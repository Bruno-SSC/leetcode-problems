var incremovableSubarrayCount = function (nums) {
  let incremovableCount = 0;
  let subArrSize = 1;
  let start = 0;

  while (subArrSize <= nums.length) {
    let arr = [...nums];

    if (subArrSize + start <= nums.length) {
      arr.splice(start, subArrSize);
    } else {
      start = 0;
      subArrSize++;
      continue;
    }

    let strictIncrease = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) strictIncrease = false;
    }

    if (strictIncrease == false) {
      start++;
      continue;
    }

    incremovableCount++;
    start++;
  }

  return incremovableCount;
};

incremovableSubarrayCount([6, 5, 7, 8]);
