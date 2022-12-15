import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddTasks from "./TasksPages/AddTasks";
import Completed from "./TasksPages/Completed";
import Tasks from "./TasksPages/Tasks";

const App = () => {
  return (
    <div className="container top-2">
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/add-tasks" element={<AddTasks />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
};

export default App;
