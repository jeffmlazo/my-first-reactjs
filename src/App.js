// import logo from "./logo.svg";
// import "./App.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {
  const name = "Jeprox";
  const x = true;
  // const x = false;

  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);

    // console.log(id);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
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
          <Route path="/" exact render={(props) => (
            <>
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
            </>
          )} />
          <Route path="/about" component={About} />
          <Footer />
          {/* <Header titulo="Pass Titulo" prop2="dd" /> */}
          {/* <Header titulo={44} /> */}
          {/* <Header /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
