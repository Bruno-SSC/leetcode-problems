//It should return a promise that resolves after 100ms.

async function sleep(millis) {
  //promise
  {
    setTimeout(() => {
      //resolve
    }, millis);
  }
}

const sleeper = sleep(2000);

// before promises

function alarm(ms, callback) {
  setTimeout(() => {
    callback();
  }, ms);
}

//alarm(2000, () => console.log("2 segundos!"));

// promises

function alarmProm(delay) {
  const promise = new Promise((resolve) => {
    if (delay < 0) throw new Error("delay must be bigger than zero");

    setTimeout(() => {
      resolve("time to wake up");
    }, delay);
  });

  return promise;
}

async function anyFunc() {
  const result = await alarmProm(2000);
  console.log(result);
}

anyFunc();
