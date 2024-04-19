var chunk = function (arr, size) {
  let chunk = [];
  let newArr = [];

  while (arr.length > 0) {
    for (let i = 0; i < size; i++) {
      let val = arr.shift();
      if (val !== undefined) chunk.push(val);
    }

    newArr.push(chunk);
    if (chunk.length >= size) chunk = [];
  }

  return newArr;
};

/* console.log(chunk([1, 2, 3, 4, 5], 5)); */
console.log(chunk([], 1));
