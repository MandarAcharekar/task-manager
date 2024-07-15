# Task Manager API
This is a simple RESTful API for managing tasks, built with Node.js and Express.

## Prerequisites
1. Node.js
2. npm

## Routes
### `GET /`
- Description: Returns the home page.
- Response: `200 OK` HTML content.
- Example: 
```
<h2>This is Task Manager Home Page</h1>
```

### `GET /tasks`
- Description: Retrieve all tasks.
- Response: `200 OK` JSON array of tasks.
- Example:
```json
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description 1",
    "completed": false
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description 2",
    "completed": true
  }
]
```

### `GET /tasks/:id`
- Description: Retrieve a single task by its ID.
- Parameters: `id` (integer) -> The ID of the task to retrieve.
- Response: `200 OK` JSON object of the task.
- Example:
```json
{
  "id": 1,
  "title": "Task 1",
  "description": "Description 1",
  "completed": false
}
```

### `POST /tasks`
- Description: Create a new task.
- Request Body:
```json
{
  "title": "New Task",
  "description": "New Description",
  "completed": false
}
```
- Response: `200 OK` JSON object of the created task.
- Example:
```json
{
  "id": 3,
  "title": "New Task",
  "description": "New Description",
  "completed": false
}
```

### `PUT /tasks/:id`
- Description: Update an existing task by its .
- Parameters: `id` (integer) -> The ID of the task to retrieve.
- Request Body:
```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "completed": true
}
```
- Response: `200 OK` JSON object of the updated task.
- Example:
```json
{
  "id": 1,
  "title": "Updated Task",
  "description": "Updated Description",
  "completed": true
}
```

### `DELETE /tasks/:id`
- Description: Delete a task by its ID.
- Parameters: `id` (integer) -> The ID of the task to retrieve.
- Response: `200 OK` JSON object of the deleted task.
- Example: 
```json
{
  "id": 1,
  "title": "Deleted Task",
  "description": "Deleted Description",
  "completed": false
}
```

## Error Handling
### `400` `Bad Request`
- Description: Returned when the request payload is incorrect.
- Response:
```json
    {
    "msg": "Payload is incorrect"
    }
```

### `404` `Not Found` 
- Description: Returned when the requested task ID does not exist.
- Response:
```json
    {
    "msg": "Task with id={id} not found"
    }
```

### `500` `Internal Server Error`
- Description: Returned when an internal error occurs.
- Response:
```json
{
  "msg": "Error occurred: {error_message}"
}
```