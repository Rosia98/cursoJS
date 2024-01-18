function printAsyncName(callback, name) {
    setTimeout(() => {
      console.log("Hola");
      
      setTimeout(() => {
        console.log(name);
      }, 1000); 
    }, 1000); 
  }
  
  // Ejemplo de uso
  printAsyncName(() => {
  }, "John");