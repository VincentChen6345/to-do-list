import "./TaskAdd";
import { ReactComponent as EditIcon } from "../assets/SVG/pencil.svg";
import { ReactComponent as TrashIcon } from "../assets/SVG/bin.svg";
import "./TaskItem.css";
import React, { useState } from "react";

const TaskItem = (props) => {
  let priorityClassName = "priority ";
  if (props.priority === "high") priorityClassName += "high";
  if (props.priority === "medium") priorityClassName += "medium";
  if (props.priority === "low") priorityClassName += "low";

  const [taskTitleClassName, setTaskTitleClassName] = useState("TaskTitle");
  const checkboxChangeHandler = () => {
    console.log("checkbox handler executed");

    //when checked, add a 'checked' class to the class "TaskTitle" which crosses out the text
    setTaskTitleClassName(
      taskTitleClassName === "TaskTitle" ? "TaskTitle checked" : "TaskTitle"
    );
  };

  return (
    <div>
      <div className="TaskItem">
        <span className={taskTitleClassName}>{props.title}</span>
        <span className="right-side">
          <span className={priorityClassName}>{props.priority}</span>
          <input
            className="checkbox"
            type="checkbox"
            // id="vehicle1"
            // name="vehicle1"
            // value="Bike"
            onChange={checkboxChangeHandler}
          />

          <EditIcon className="EditIcon" />
          <TrashIcon className="TrashIcon" />
        </span>
      </div>
    </div>
  );
};
export default TaskItem;
