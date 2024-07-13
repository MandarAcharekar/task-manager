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
}];

app.get("/", (req, res) => {
    return res.send("<h2>This is Task Manager Home Page</h1>");
});

// GET /tasks: Retrieve all tasks.
app.get("/tasks", (req, res) => {
    return res.send(tasks);
});

// GET /tasks/:id: Retrieve a single task by its ID.
app.get("/tasks/:id", (req, res) => {
    const id = req.params.id;

    for(let i=0;i<tasks.length;i++){
        if(tasks[i]["id"] == id){
            return res.send(tasks[i])
        }
    }// for

    return res.status(404).send({"msg": `Task with id=${id} not found`});
});

// POST /tasks: Create a new task.
app.post("/tasks/", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;

    if(typeof title == 'undefined' || typeof description == 'undefined' || typeof completed == 'undefined'){
        return res.status(400).send({"msg": "Payload is incorrect"});
    }
    else{
        const newTask = {
            id: tasks.length + 1,
            title: title,
            description: description,
            completed: completed
        };
        tasks.push(newTask);

        return res.status(201).json(tasks.slice(-1));
    }
});

// PUT /tasks/:id: Update an existing task by its ID.
app.put("/tasks/:id", (req, res) => {
    const id = req.params.id;

    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;

    if(typeof title !== 'string' || typeof description !== 'string' || typeof completed !== 'boolean'){
        return res.status(400).send({"msg": "Payload is incorrect"});
    }

    for(let i=0;i<tasks.length;i++){
        if(tasks[i]["id"] == id){
            tasks[i].title = title;
            tasks[i].description = description;
            tasks[i].completed = completed;

            return res.send(tasks[i]);
        }
    }

    return res.status(404).send({"msg": `Task with id=${id} not found`});
});

// DELETE /tasks/:id: Delete a task by its ID.
app.delete("/tasks/:id", (req, res) => {
    const id = req.params.id;
    let index = null;

    for(let i=0;i<tasks.length;i++){
        if(tasks[i]["id"] == id){
            index = i;
        }
    }

    if(typeof index === 'number'){
        const deletedTask = tasks.splice(index, 1)[0]
        return res.send(deletedTask);
    }
    else{
        return res.status(404).send({"msg": `Task with id=${id} not found`});
    }
});


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;