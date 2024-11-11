// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import InputTask from "./TaskInput"
import TaskList from "./TaskList"

function App() {
  const [tasks, setTask] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  const handleAddTask = () => {
    if (newTasks.trim() === "") return 
    setNewTasks([...tasks, {text: newTasks, completed: false}]);
    setNewTasks("");
  }
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <InputTask handleAddTask={handleAddTask} newTasks={newTasks} setNewTasks={setNewTasks}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
