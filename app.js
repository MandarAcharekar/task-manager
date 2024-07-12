const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = [{
    "id": 2,
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false
  }]

app.get("/",(req, res) => {
    res.send("<h2>This is Task Manager Home Page</h1>")
})

// GET /tasks: Retrieve all tasks.
app.get("/tasks",(req, res) => {
    res.send(tasks)
})

// GET /tasks/:id: Retrieve a single task by its ID.
app.get("/tasks",(req, res) => {
    res.send(tasks)
})

// POST /tasks: Create a new task.

// PUT /tasks/:id: Update an existing task by its ID.

// DELETE /tasks/:id: Delete a task by its ID.


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;