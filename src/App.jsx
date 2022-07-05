import "./App.css";
import TaskAdd from "./components/TaskAdd";
import taskData from "./data/TaskData";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title">React To-Do List</h1>
        <TaskAdd />
        <TaskList data={taskData} />
      </div>
    </div>
  );
}

export default App;
