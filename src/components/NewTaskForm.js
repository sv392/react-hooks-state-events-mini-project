import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text: taskText, category: taskCategory };
    onTaskFormSubmit(newTask);
    setTaskText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
