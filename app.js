const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = [{
    id: 1,
    title: "Set up environment",
    description: "Install Node.js, npm, and git",
    completed: true,
  }]

app.get("/", (req, res) => {
    res.send("<h2>This is Task Manager Home Page</h1>");
})

// GET /tasks: Retrieve all tasks.
app.get("/tasks", (req, res) => {
    res.json(tasks);
})

// GET /tasks/:id: Retrieve a single task by its ID.
app.get("/tasks/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id, "id")

    for(let i=0;i<tasks.length;i++){
        if(tasks[i]["id"] == id){
            // console.log(tasks[i])
            // res.send({"data":tasks[i]})
            res.send({"data": "Success"})

        }
    }// for

    const msg = `Task with id=${id} not found`
    res.status(400).send({"err_msg":msg})
})

// POST /tasks: Create a new task.
app.post("/tasks/", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;

    if(typeof title == 'undefined' || typeof description == 'undefined' || typeof completed == 'undefined'){
        res.status(400).json(tasks);
    }
    else{
        const newTask = {
            id: tasks.length + 1,
            title: title,
            description: description,
            completed: completed
        };
        tasks.push(newTask);

        res.status(201).json(tasks);
    }

})

// PUT /tasks/:id: Update an existing task by its ID.
app.put("/tasks/:id", (req, res) => {
    const id = req.params.id;

})

// DELETE /tasks/:id: Delete a task by its ID.


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;