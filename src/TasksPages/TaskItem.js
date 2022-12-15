import React from "react";

const TaskItem = (props) => {
  return (
    // <div className="flex justify-center min-h-screen">
    //   <div className="flex-1 max-w-5xl p-6">
    //     <div className="grid grid-cols-2 grid-rows-3 gap-4 grid-flow-row-dense">
    <>
      <h2 className="text-lg font-semibold leading-6">{props.title}</h2>
      <p className="text-gray-600">{props.description}</p>
      <p className="text-gray-300 text-xs ml-80">{props.date}</p>
    </>
    //     </div>
    //   </div>
    // </div>
    // <h1>Hello</h1>
  );
};

export default TaskItem;
