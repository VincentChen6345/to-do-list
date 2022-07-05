import "./App.css";
import TaskAdd from "./components/TaskAdd";
import taskData from "./data/TaskData";
import TaskList from "./components/TaskList";
import React, { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(taskData);
  const addTaskHandler = (task) => {
    console.log(task);
    setTaskList((prevTaskList) => {
      return [task, ...prevTaskList];
    });
  };
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title">React To-Do List</h1>
        <TaskAdd onAddTask={addTaskHandler} />
        <TaskList data={taskList} />
      </div>
    </div>
  );
}

export default App;
