const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));

const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

var addTwoPromises = async function (promise1, promise2) {
  const [N1, N2] = await Promise.all([promise1, promise2]);
  return new Promise((resolve) => resolve(N1 + N2));
};

addTwoPromises(promise1, promise2).then((data) => console.log(data));
