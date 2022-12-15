import React from "react";

import Sidebar from "../Components/Sidebar";

import { BsViewList } from "react-icons/bs";
import TaskItem from "./TaskItem";

const Tasks = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <Sidebar />
      <div className="flex-1 max-w-5xl p-6">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black">
          <BsViewList />
          <h2 className="text-lg font-semibold ml-2">View Tasks</h2>
        </div>
        <TaskItem />
        <div></div>
      </div>
    </div>
  );
};

export default Tasks;
