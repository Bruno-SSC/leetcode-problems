var isEmpty = function (obj) {
  if (typeof obj === "object" && Array.isArray(obj) === false)
    return Object.keys(obj).length === 0;

  if (Array.isArray(obj)) return obj.length === 0;

  return false;
};

console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty([null, false, 0]));
console.log(isEmpty(1));
