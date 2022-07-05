import "./TaskAdd";
import { ReactComponent as EditIcon } from "../assets/SVG/pencil.svg";
import { ReactComponent as TrashIcon } from "../assets/SVG/bin.svg";
import "./TaskItem.css";

const TaskItem = (props) => {
  let className = "priority ";
  if (props.priority === "high") className += "high";
  if (props.priority === "medium") className += "medium";
  if (props.priority === "low") className += "low";

  return (
    <div>
      <div className="TaskItem">
        <span className="TaskTitle">{props.title}</span>
        <span className="right-side">
          <span className={className}>{props.priority}</span>
          <input
            className="checkbox"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <EditIcon className="EditIcon" />
          <TrashIcon className="TrashIcon" />
        </span>
      </div>
    </div>
  );
};
export default TaskItem;
