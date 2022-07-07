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
  const checkBoxHandler = (checkBoxStatus, taskID) => {
    //find the object with matching taskID
    setTaskList((prevTaskList) => {
      const checkedTaskList = prevTaskList.find((task) => task.id === taskID);
      //update checked status

      checkedTaskList.checked = checkBoxStatus;
      console.log(checkedTaskList.checked);

      return checkedTaskList;
      ///////////////////////
      //Figure out how to go through the array of objects, find the one with matching ID, then update the checked status of that object
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No tasks yet. Maybe add one?</p>
  );
  if (taskList.length > 0) {
    content = (
      <TaskList
        data={taskList}
        onDeleteItem={deleteItemHandler}
        onCheckBox={checkBoxHandler}
      />
    );
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
