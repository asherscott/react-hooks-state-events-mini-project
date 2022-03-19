import React from "react";

function CategoryFilter({ categories, onSelected, selected }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button onClick={() => onSelected(category)} className={(category === selected) ? 'selected' : ''} key={category}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
