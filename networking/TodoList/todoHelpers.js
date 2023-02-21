// view all todos
const fetchAllTodos = (todos) => {
  return Object.values(todos)
}

// view a todo
const fetchTodo = (todos, id) => {
  return todos[id];
}

//add a todo
const addTodo = (todos, taskDescription) => {
  const id = Math.floor(Math.random() * 100000);
  const isCompleted = false;
  const task = taskDescription;

  const newTodo = {id, task, isCompleted};
  todos[id] = newTodo;
  return newTodo; 
}

//remove a todo

const removeTodo = (todos, id) => {
  const todoToBeDeleted = todos[id];
  delete todos[id];
  return todoToBeDeleted
}

//edit or update a todo (in this case, mark as completed =)

const toggleCompletion = (todos, id) => {
  const changedTodo = todos[id]

  changedTodo.isCompleted = !changedTodo.isCompleted;

  return changedTodo 
}

module.exports = {fetchAllTodos, fetchTodo, addTodo, removeTodo, toggleCompletion}