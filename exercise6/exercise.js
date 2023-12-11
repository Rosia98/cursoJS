function printName() {

      const helloName = "Hello John";
      
      function inner() {
        return helloName;
      }
    
      console.log(inner());
      }

    printName();