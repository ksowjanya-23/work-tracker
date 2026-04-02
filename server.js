const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  { title: "New Task", status: "completed" }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.delete('/tasks/:index', (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.json(tasks);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});