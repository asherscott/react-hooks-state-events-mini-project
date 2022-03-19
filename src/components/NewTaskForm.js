import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Code');

  function handleText(e) {
    setText(e.target.value)
  }
  function handleCategory(e) {
    setCategory(e.target.value)
  }

  const filteredCategory = categories.filter(category => (category !== 'All'))

  return (
    <form onSubmit={(e) => onTaskFormSubmit(e, {text, category} )} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory} >
          {filteredCategory.map(category => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
