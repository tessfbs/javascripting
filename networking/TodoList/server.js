const express = require('express')
const {fetchAllTodos, fetchTodo, addTodo, removeTodo, toggleCompletion} = require('./todoHelpers')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const formHTMLInJSEwww = `
  <form method="POST" action="/todos">
    <button type="submit">Add todo</button>
  </form>
  <form method="POST" action="/todos/dededff/delete">
  <button type="submit">Delete todo</button>
  </form>
  <form method="POST" action="/todos/dededff/update">
  <button type="submit">Update todo</button>
  </form>
  `
const todo1 = {
  id: "12345",
  task: "Feed the pet rock",
  isCompleted:false
}

const todo2 = {
  id: "54321",
  task: "look at the snow",
  isCompleted:true
}

const todos = {
  12345: todo1,
  54321: todo2
}


// /todos (GET) View all todos
app.get('/todos', (req, res) => {
  // res.send(formHTMLInJSEwww)
  // res.send('ALL THE TODOS')
  const todoList = fetchAllTodos(todos)
  const templatevars = {todoList}
  res.render("todos", templatevars)
})

// /todo/id (GET) View a todo 
app.get('/todos/:todo_id', (req, res) => {//req.params access the parameters of the url
  const todoID = req.params.todo_id;
  const todo = fetchTodo(todos,todoID)
  const templateVars = {todo}
  res.render("todo", templateVars)


  // res.send(`A SINGULAR TODO OF DESTINY ${req.params.todo_id}`)
})

// /todos (POST) Add a todo
app.post('/todos', (req, res) => {
  console.log(req.body)
  const task = req.body.task
  const newTodo = addTodo(todos, task)
  res.redirect(`/todos/${newTodo.id}`)
  // res.send('ADDED A TODO')
})

// /todo/id  (DELETE) Remove a todo ---> /todo/id/delete (POST)
app.post('/todos/:todo_id/delete', (req, res) => {
  const todoID = req.params.todo_id;
  removeTodo(todos, todoID)
  res.redirect(`/todos`)
  // res.send('REMOVED A TODO')
})

// /todo/id (PUT)) Edit/Update a todo ---> /todo/id/update (POST)
app.post('/todos/:todo_id/update', (req, res) => {
  const todoID = req.params.todo_id;
  toggleCompletion(todos, todoID)
  res.redirect(`/todos/${todoID}`)
  // res.send('UPDATED A TODO')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

