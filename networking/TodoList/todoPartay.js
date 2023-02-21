const todo = {
  id: "jhjehudhejd",
  task: "Feed the pet rock",
  isCompleted:false
}

const todos = {
  jhjehudhejd: todo,
}

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
  const id = Math.random();
  const isCompleted = false;
  const task = taskDescription;

  const newTodo = {id, task, isCompleted};
  todos[id] = newTodo;
  return newTodo; //or 
}

//remove a todo

const removeTodo = (todos, id) => {
  const todoToBeDeleted = todos[id];
  delete todos[id];
  return todoToBeDeleted
}

//edit or update a todo (in this case, mark as completed =)

const toddleCompletion = (todos, id) => {
  const changedTodo = todos[id]

  changedTodo.isCompleted = !changedTodo.isCompleted;

  return changedTodo 
}

console.log(fetchAllTodos(todos))
toddleCompletion(todos, "jhjehudhejd")
console.log(fetchAllTodos(todos))
removeTodo(todos, "jhjehudhejd")
console.log(fetchAllTodos(todos))
