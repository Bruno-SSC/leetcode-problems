var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const hw = createHelloWorld();

console.log(hw());
console.log(hw(123123));
console.log(hw(123123, "123123"));
console.log(hw());
