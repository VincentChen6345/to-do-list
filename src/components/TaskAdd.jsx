import "./TaskAdd.css";
import { ReactComponent as DotPointIcon } from "../assets/SVG/list2.svg";
import React, { useState } from "react";

const TaskAdd = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("high");
  const [validEntry, setValidEntry] = useState(true);
  const priorityChangeHandler = (e) => {
    setEnteredPriority(e.target.value);
  };
  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
    setValidEntry(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTask.trim().length === 0) {
      setValidEntry(false);
      return;
    }
    const taskData = {
      title: enteredTask,
      priority: enteredPriority,
      id: Math.random().toString(),
    };
    setEnteredTask("");
    props.onAddTask(taskData);
  };
  return (
    <div className="input__container">
      <form className="input__form" onSubmit={submitHandler}>
        <div className="container1">
          <span className="span1">
            <DotPointIcon className="DotPointIcon" />
            <input
              type="text"
              className={`input__field ${
                validEntry === false ? "invalid" : ""
              }`}
              placeholder="Add Task"
              onChange={taskChangeHandler}
              value={enteredTask}
            />
          </span>
          <span className="input__priority">
            <label className="priority__title">Priority</label>
            <select
              className="input__dropdown"
              onChange={priorityChangeHandler}
            >
              <option value="high">high</option>

              <option value="medium">medium</option>
              <option value="low">low</option>
            </select>
          </span>
        </div>
        <button type="submit" className="input__submit-button">
          Add new task
        </button>
      </form>
    </div>
  );
};

export default TaskAdd;
