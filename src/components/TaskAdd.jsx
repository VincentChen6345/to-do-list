import "./TaskAdd.css";

const TaskAdd = () => {
  return (
    <div className="input__container">
      <form className="input__form">
        <input type="text" className="input__field" placeholder="Add Task" />
        <label>Priority</label>
        <select className="input__dropdown">
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <button type="submit">Add new task</button>
      </form>
    </div>
  );
};

export default TaskAdd;
