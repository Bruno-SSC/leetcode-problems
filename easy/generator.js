var fibGenerator = function* () {
  let fibo = [];

  yield fibo.length;

  fibo.push(0);

  while (true) {
    if (fibo.length >= 3) {
      let newVal = fibo[fibo.length - 1] + fibo[fibo.length - 2];
      fibo.push(newVal);
    }

    if (fibo.length >= 0 && fibo.length < 3) {
      fibo.push(1);
    }

    yield fibo[fibo.length - 1];
  }
};

const gen = fibGenerator();

for (let i = 0; i <= 5; i++) console.log(gen.next().value);
