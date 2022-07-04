import "./TaskAdd.css";
import { ReactComponent as DotPointIcon } from "../assets/SVG/list2.svg";
const TaskAdd = () => {
  return (
    <div className="input__container">
      <form className="input__form">
        <div className="container1">
          <span className="span1">
            <DotPointIcon className="DotPointIcon" />
            <input
              type="text"
              className="input__field"
              placeholder="Add Task"
            />
          </span>
          <span className="input__priority">
            <label className="priority__title">Priority</label>
            <select className="input__dropdown">
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
