// import logo from "./logo.svg";
// import "./App.css";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const name = "Jeprox";
  const x = true;
  // const x = false;

  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();

      console.log(data);
    };

    fetchTasks();
  }, []);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);

    // console.log(id);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <h1 className="name">Hi My Name is {name}</h1>
      <div>
        <h2>Auto Computation</h2>
        <p>One Plus One = {1 + 1}</p>
        <p>Two Times Two = {2 * 2}</p>
        <p>Four Divided By Four = {4 / 4}</p>
        <p>Six Minus One = {6 - 1}</p>
        <p>Ternary operator {x ? "Truelala" : "Falselala"}</p>
      </div>

      <div className="container">
        <h2>This is a component from the Header component</h2>
        {/* <Header titulo="Pass Titulo" prop2={5} /> */}
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {/* <Tasks /> */}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks To Show"
        )}
        {/* <Header titulo="Pass Titulo" prop2="dd" /> */}
        {/* <Header titulo={44} /> */}
        {/* <Header /> */}
      </div>
    </div>
  );
}

export default App;
