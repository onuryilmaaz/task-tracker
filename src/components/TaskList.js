import React from "react";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)} // Tamamlama durumunu değiştir
          />
          <span className={task.completed ? "completed" : ""}>{task.name}</span>
          <button
            onClick={() => onDeleteTask(task.id)} // Görevi sil
            className="delete-button"
          >
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
