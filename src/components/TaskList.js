import React from "react";
import Task from './Task';

function TaskList({ tasks, onDeleteClick }) {
  return (
    <div className="tasks">
      {tasks.map(task => {
      return <Task task={task} key={task.text} onDeleteClick={onDeleteClick} />
    })}
    </div>
  );
}

export default TaskList;
