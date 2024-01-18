const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    resolve(Math.random());
  } else {
    reject(new Error("Usuario no autenticado"));
  }
});

const secondPromise = (randomNumber) => {
  return new Promise((resolve, reject) => {
    if (randomNumber > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Número aleatorio no admitido"));
    }
  });
};

// Promesas encadenadas
firstPromise
  .then((randomNumber) => {
    return secondPromise(randomNumber);
  })
  .then((finalObject) => {
    console.log("Objeto final:", finalObject);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Operación finalizada, con errores o sin ellos.");
  });

