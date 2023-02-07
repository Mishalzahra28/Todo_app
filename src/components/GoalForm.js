import React, { useState } from "react";
import "./GoalForm.css";
// import "../jquery-3.6.0";

function GoalForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");

  function TitleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  }

  function SubmitHandler(event) {
    event.preventDefault();
    console.log("this is sent to new goals");
    console.log(enteredTitle);
    props.addTask(enteredTitle);
    setEnteredTitle("");
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-Goal__control">
        <label>Add Task</label>
        <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
      </div>
      <div className="new-Goal__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Goal</button>
      </div>
    </form>
  );
}

export default GoalForm;
