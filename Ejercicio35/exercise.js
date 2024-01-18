function repeatHello(callback) {
    const intervalId = setInterval(() => {
      callback();
    }, 1000);
  
    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Intervalo limpiado después de 5 segundos");
    }, 5000);
  }
  
  // Ejemplo: 
  const helloCallback = () => {
    console.log("Hola");
  };
  
  repeatHello(helloCallback);
