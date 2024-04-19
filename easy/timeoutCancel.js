// FIXME: todo esse exercicio não faz sentido nenhum. 
// No próximo exercicio ele não faz sentido. https://leetcode.com/problems/interval-cancellation/



// SECTION: resposta da plataforma. A "correta".
// Eu acho que esse exercício só funciona se executar na própria IDE do leetcode. Ele não espera como resultado um array de objetos, simplesmente:
// o resultado de chamar a função nos argumentos a cada t.
// O próprio leetcode conta o tempo e os retornos, trazendo eles em um objeto e array.

var cancellable = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => fn(...args), t);

  let cancelFn = () => clearInterval(timer);
  return cancelFn;
};

const case1 = cancellable((x) => x * 2, [4], 35);
const case2 = cancellable((x1, x2) => x1 * x2, [2, 5], 30);
const case3 = cancellable((x1, x2, x3) => x1 + x2 + x3, [5, 1, 3], 50);

setTimeout(() => {
  console.log(cancellable((x) => x * 2, [4], 35));
}, 500);

/* 
// SECTION: This works. At least the way I first understood what the problem wants.
var cancellable = function (fn, args, t) {
  const cancelTimeMs = 190;
  let elapsedTime = 0;
  let result = [];

  const cancelFn = () => {
    clearInterval(fnExec);
    return JSON.stringify(result);
  };

  const fnExec = setInterval(() => {
    result.push({
      time: elapsedTime,
      returned: fn(...args),
    });

    elapsedTime += t;

    if (elapsedTime >= cancelTimeMs) {
      cancelFn();
    }
  }, t);

  return cancelFn;
};

 */
