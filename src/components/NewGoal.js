import React, { useState } from "react";
import "./NewGoal.css";
import GoalForm from "./GoalForm";

function NewGoal(props) {
  const [isEditing, setIsEditing] = useState(false);
  function saveGoalDataHandler(enteredGoalData) {
    const GoalData = {
      id: (Math.random() * 100).toString(),
      title: enteredGoalData,
    };
    console.log("in savegoalsatsvjh");
    console.log(GoalData);
    props.onAddGoal(GoalData);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-Goal">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Goal</button>
      )}
      {isEditing && (
        <GoalForm
          onSaveGoalData={saveGoalDataHandler}
          onCancel={stopEditingHandler}
          addTask={saveGoalDataHandler}
        />
      )}
    </div>
  );
}

export default NewGoal;
