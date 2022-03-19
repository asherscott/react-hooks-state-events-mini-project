import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selected, setSelected] = useState('All');

  function handleDeleteClick(task) {
    setTasks(tasks.filter(taskItem => (taskItem !== task)))
  }

  function handleSelected(category) {
    setSelected(category)
  }

  function handleTaskFormSubmit(e, newItem) {
    e.preventDefault()
    setTasks([...tasks, newItem])
  }

  const filteredTasks = tasks.filter(task => (selected === 'All') ? true : (task.category === selected));

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelected={handleSelected} selected={selected} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
