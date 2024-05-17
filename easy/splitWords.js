var splitWordsBySeparator = function (words, separator) {
  let result = [];

  for (str of words) {
    result.push(...str.split(separator).filter((subs) => subs.length > 0));
  }

  return result;
};

splitWordsBySeparator(["one.two.three", "four.five", "six"], ".");
splitWordsBySeparator(["$easy$", "$problem$"], "$");
