var answerQueries = function (nums, queries) {
  let answer = [];
  nums = nums.sort((a, b) => a - b);
  let max = nums.length;
  let min = 0;
  let counter = 0;

  while (counter < queries.length) {
    let targetSum = queries[counter];
    let guess = Math.round((max + min) / 2);
    let sum = nums.slice(0, guess).reduce((acc, curr) => acc + curr);

    if (sum > targetSum && guess == 1) {
      answer.push(0);
      max = nums.length;
      counter++;
      continue;
    }

    if (sum > targetSum) {
      max = guess;
      continue;
    }

    if (sum < targetSum) min = guess;
    if (sum + nums[guess] <= targetSum) continue;

    answer.push(guess);
    min = 0;
    max = nums.length;

    counter++;
  }

  console.log(answer);
  return answer;
};

answerQueries([4, 5, 2, 61], [3, 1, 21]);
