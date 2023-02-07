import NewGoal from "./components/NewGoal";
import TaskList from "./components/TaskList";
import { useState } from "react";
import "./App.css";

const dummy_tasks = [
  {
    id: "1",
    title: "Learn React",
  },
  { id: "2", title: "Complete lab" },
  {
    id: "3",
    title: "Create project",
  },
  {
    id: "4",
    title: "Submit Project",
  },
];

function App() {
  const [tasks, setTasks] = useState(dummy_tasks);

  function addTaskHandler(newTask) {
    console.log("in APP");
    console.log(newTask);
    setTasks((prevtasks) => {
      return [newTask, ...prevtasks];
    });
  }

  const deleteItemHandler = (goalId) => {
    setTasks((prevGoals) => {
      console.log("in app");
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      console.log(updatedGoals);
      return updatedGoals;
    });
  };

  return (
    <>
      <NewGoal onAddGoal={addTaskHandler} />
      <TaskList data={tasks} onDeleteItem={deleteItemHandler} />
    </>
  );
}

export default App;
