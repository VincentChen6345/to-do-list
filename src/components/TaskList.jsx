import TaskItem from "./TaskItem";
import "./TaskList.css";
// import FilterButtons from "./FilterButtons";
const TaskList = (props) => {
  // const updateCheckBoxHandler = (currentStatus) => {
  //   props.data.checked = currentStatus;
  //   console.log(props.data);
  // };
  return (
    <div>
      {props.data.map((taskItem) => (
        <TaskItem
          title={taskItem.title}
          priority={taskItem.priority}
          key={taskItem.id}
          checked={taskItem.checked}
          // onCheck={updateCheckBoxHandler}
        />
      ))}
    </div>
  );
};

export default TaskList;
