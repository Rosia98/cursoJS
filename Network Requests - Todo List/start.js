async function getTodos() {
    try {
      
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
      }

  const todos = await response.json();

  console.log(todos);
    }catch (error) {
  console.error('Error fetching Todos:', error.message);
    }
  }

  getTodos();