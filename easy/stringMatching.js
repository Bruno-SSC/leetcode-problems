var stringMatching = function (words, ind = 0) {
  if (ind == words.length) return [];

  const sub = new RegExp(words[ind]);

  for (let i = 0; i < words.length; i++) {
    let str = words[i];
    if (words[ind] == str) continue;
    if (sub.test(str)) return [words[ind], ...stringMatching(words, ind + 1)];
  }

  return stringMatching(words, ind + 1);
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
