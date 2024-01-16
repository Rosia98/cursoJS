function multiplicarPorDos(valor) {
  let numero = 2;

  function inner() {
    return valor * numero;
  }

  return inner;
}

const resultado = multiplicarPorDos(4)();
console.log("Resultado:", resultado);
