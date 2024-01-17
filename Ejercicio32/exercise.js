const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filtrarPerson = {
  id: person.id,
  age: person.age
};

const json = JSON.stringify(filtrarPerson);

console.log(json); // Should return: { id: 1, age: 25 }