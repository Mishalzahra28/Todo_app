import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <ul className="expenses-list">
      {props.data.map((tasks) => (
        <TaskItem
          key={tasks.id}
          id={tasks.id}
          title={tasks.title}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
}

export default TaskList;
