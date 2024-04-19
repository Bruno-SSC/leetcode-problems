var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength({}, null, "3"));
console.log(argumentsLength([5]));
