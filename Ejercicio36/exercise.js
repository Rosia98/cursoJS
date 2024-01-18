const number = 15;
const miPromesa = new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(`El número ${number} es mayor que 10.`);
    } else {
      reject(`El número ${number} no es mayor que 10.`);
    }
  });
  
  miPromesa
    .then((message) => {
      console.log(`Éxito: ${message}`);
    })
    .catch((errorMessage) => {
      console.log("Error");
    });
