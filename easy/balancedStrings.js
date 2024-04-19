var balancedStringSplit = function (s) {
  let Rs = 0;
  let Ls = 0;
  let max = 0;

  for (const char of s) {
    if (char === "R") {
      Rs++;
    } else {
      Ls++;
    }

    if (Rs === Ls) {
      Rs = 0;
      Ls = 0;
      max++;
    }
  }

  return max;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
