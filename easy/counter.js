var createCounter = function (init) {
  let n = init;
  return {
    increment: () => {
      n++;
      return n;
    },
    decrement: () => {
      n--;
      return n;
    },
    reset: () => {
      n = init;
      return n;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
console.log(counter.decrement()); // 4
console.log(counter.decrement()); // 4
console.log(counter.decrement()); // 4
console.log(counter.decrement()); // 4
console.log(counter.decrement()); // 4
