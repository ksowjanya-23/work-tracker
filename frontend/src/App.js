import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = (index) => {
    fetch(`http://localhost:3000/tasks/${index}`, {
      method: "DELETE",
    }).then(() => getTasks());
  };

  return (
    <div>
      <h1>My Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <p>{task.title} - {task.status}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;