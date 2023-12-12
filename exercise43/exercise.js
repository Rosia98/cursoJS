const user = {
  id: 1,
  name: "John",
  age: 25,
};
function getUserFromLocalStorage() {
  try {
   
  const userJSON = localStorage.getItem('usuario');

    if (userJSON === null) {
      console.log('No hay datos de usuario almacenados en localStorage.');
      return;
    }

  const userObj = JSON.parse(userJSON);

  console.log('Usuario recuperado de localStorage:', userObj);
  } catch (error) {
  console.error('Error al recuperar el usuario de localStorage:', error.message);
  }
}

getUserFromLocalStorage();