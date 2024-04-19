var expect = function (val) {
  return {
    toBe: function (exp) {
      if (val !== exp) throw new Error("Not Equal");
      return true;
    },
    notToBe: function (exp) {
      if (val === exp) throw new Error("Equal");
      else return true;
    },
  };
};
