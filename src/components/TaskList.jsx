import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div>
      {props.data.map((taskItem) => (
        <TaskItem title={taskItem.title} priority={taskItem.priority} />
      ))}
    </div>
  );
};

export default TaskList;
