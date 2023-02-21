const todo = {
  id: "jhjehudhejd",
  task: "Feed the pet rock",
  isCompleted:false
}

const todos = {
  id: todo,
  id: todo,
  id: todo
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

const removeTodo = (todos, id){
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

````
#EVENTS CRUD (GET POST PUT DELETE)

- View all todos (GET)
- View a todo (GET)
- Add a todo (POST)
- Remove a todo (DELETE)  ----> html limitation (post)
- Edit/Update a todo  (PUT) ----> html limitation (post)

````

#ROUTES & Events

- /todos (GET) View all todos
- /todo/id (GET) View a todo 
- /todos (POST) Add a todo

- /todo/id (PUT)) Edit/Update a todo ---> /todo/id/update (POST)
- /todo/id  (DELETE) Remove a todo ---> /todo/id/delete (POST)

#Packages
 - Express (https://expressjs.com/)
 - UUID (create an ID) (https://www.npmjs.com/package/uuid)
 - EJS (https://www.npmjs.com/package/ejs)
 - Nodemon (automatically restart when edited) (https://www.npmjs.com/package/nodemon)

 #Config.

 - app.set('view engine', 'ejs')
 - app.use(express.static('public'))
 - app.use(express.bodyParser)





