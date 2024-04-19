var compose = function (functions) {
  return function (x) {
    let val = x;

    if (functions.length === 0) return x;

    for (let i = functions.length - 1; i >= 0; i--) {
      let fn = functions[i];
      val = fn(val);
    }

    return val;
  };
};

const fn = compose([]);
console.log(fn(4));
