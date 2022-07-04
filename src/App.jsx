import "./App.css";
import TaskAdd from "./components/TaskAdd";
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title">React To-Do List</h1>
        <TaskAdd />
        <TaskItem />
      </div>
    </div>
  );
}

export default App;
