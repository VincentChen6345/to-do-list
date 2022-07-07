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
  const [checkedStatus, setCheckedStatus] = useState(false);
  const checkboxChangeHandler = () => {
    //when checked,the checked status becomes 'true', this gets sent up and updated in the object based on the ID of the checked TaskItem

    setCheckedStatus(checkedStatus === false ? true : false);
    console.log(`status of task ${props.id} is ${checkedStatus}`);

    //when checked, add a 'checked' class to the class "TaskTitle" which crosses out the text
    setTaskTitleClassName(
      taskTitleClassName === "TaskTitle" ? "TaskTitle checked" : "TaskTitle"
    );
    props.checked(checkedStatus, props.id);
  };
  const deleteHandler = () => {
    props.onDelete(props.id);
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
            onChange={checkboxChangeHandler}
          />

          <EditIcon className="EditIcon" />
          <button className="delete-button" onClick={deleteHandler}>
            <TrashIcon className="TrashIcon" />
          </button>
        </span>
      </div>
    </div>
  );
};
export default TaskItem;
