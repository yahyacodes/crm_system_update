import { Route, Routes } from "react-router-dom";

import "./App.css";
import Tasks from "./TasksPages/Tasks";

function App() {
  return (
    <div className="container top-2">
      <Routes>
        <Route path="/" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
