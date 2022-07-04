import logo from "./logo.svg";
import "./App.css";
import TaskAdd from "./components/TaskAdd";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title">React To-Do List</h1>
        <TaskAdd />
      </div>
    </div>
  );
}

export default App;
