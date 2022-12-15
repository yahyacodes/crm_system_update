import React from "react";

import TaskItem from "./TaskItem";

const DUMMY_DATA = [
  {
    id: "t1",
    title: "Do some code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
  {
    id: "t2",
    title: "I want to code music player first",
    description: "I push it to github",
    date: "16-12-2022",
  },
  {
    id: "t3",
    title: "Do some code first",
    description: "Define your variables before coding",
    date: "17-12-2022",
  },
  {
    id: "t4",
    title: "Do some code first",
    description: "Define your variables before coding",
    date: "18-12-2022",
  },
  {
    id: "t5",
    title: "Do somr code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
  {
    id: "t6",
    title: "Do somr code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
  {
    id: "t7",
    title: "Do somr code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
  {
    id: "t8",
    title: "Do somr code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
  {
    id: "t9",
    title: "Do somr code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
  {
    id: "t10",
    title: "Do somr code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
];

const AvailabeTasks = () => {
  const taskList = DUMMY_DATA.map((task) => (
    <TaskItem
      id={task.id}
      key={task.id}
      title={task.title}
      description={task.description}
      date={task.date}
    />
  ));

  return <div>{taskList}</div>;
};

export default AvailabeTasks;
