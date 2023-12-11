const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(userObj) {
  try {
    const userJSON = JSON.stringify(userObj);

    localStorage.setItem('usuario', userJSON);

    console.log('Usuario guardado en localStorage.');
  } catch (error) {

    console.error('Error al guardar el usuario en localStorage:', error.message);
  }

};
saveUserToLocalStorage(user);