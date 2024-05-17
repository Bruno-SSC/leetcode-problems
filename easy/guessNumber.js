var guesser = function (num) {
  let correctAnswer = 50;

  let max = 100;
  let min = 0;
  let guess = Math.round((max + min) / 2);

  while (guess != correctAnswer) {
    if (guess > correctAnswer) {
      max = guess;
    }

    if (guess < correctAnswer) {
      min = guess;
    }

    guess = Math.round((max + min) / 2);
  }

  return guess;
};
