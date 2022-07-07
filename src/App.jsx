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
      const updatedList = [task, ...prevTaskList];
      return updatedList;
    });
  };
  const deleteItemHandler = (taskID) => {
    setTaskList((prevTaskList) => {
      const updatedList = prevTaskList.filter((task) => task.id !== taskID);
      return updatedList;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No tasks yet. Maybe add one?</p>
  );
  if (taskList.length > 0) {
    content = <TaskList data={taskList} onDeleteItem={deleteItemHandler} />;
  }
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title">React To-Do List</h1>
        <TaskAdd onAddTask={addTaskHandler} />
        {content}
      </div>
    </div>
  );
}

export default App;
