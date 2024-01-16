function imprimirNombre() {
    // Declarar una variable dentro de la función externa
    let holaNombre = "Hola Juan";
  
    // Declarar una función interna que captura la variable externa
    function interno() {
      // Devolver la variable capturada
      return holaNombre;
    }
  
    // Llamar a la función interna y mostrar el resultado en la consola después de 1 segundo
    setTimeout(function() {
      console.log(interno());
    }, 1000);
  }
  
  // Llamar a la función externa para activar el cierre
  imprimirNombre();