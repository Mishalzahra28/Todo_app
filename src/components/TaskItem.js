import React, { useState, useRef } from "react";
import "./TaskItem.css";
import Edit from "./Edit";

function TaskItem(props) {
  const [data, setData] = useState(props.title);
  const [isComplete, setIsComplete] = useState(false);
  const [editing, setEditing] = useState(false);

  function stopCompleteHandler() {
    setIsComplete(true);
  }

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const editHandler = () => {
    setEditing(!editing);
  };
  const dataChangeHandler = (event) => {
    setData(event.target.value);
  };
  const updateHandler = () => {
    setEditing(!editing);
  };
  let content;
  if (editing == true) {
    content = (
      <Edit
        data={data}
        dataChangeHandler={dataChangeHandler}
        updateHandler={updateHandler}
      />
    );
  }
  return (
    <div className="Task-item__description">
      {<h2>{data}</h2>}
      {content}
      {isComplete && <h4>Task Completed!</h4>}
      <div className="new-Goal__actions">
        <button type="button" className="new-Goal__btn" onClick={editHandler}>
          Edit
        </button>
        <button type="button" className="new-Goal__btn" onClick={deleteHandler}>
          Delete
        </button>
        <button
          type="button"
          className="new-Goal__btn"
          onClick={stopCompleteHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
