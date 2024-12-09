function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>{task.name}</span>
      <button onClick={() => onDeleteTask(task.id)} className="delete-button">
        Sil
      </button>
    </li>
  );
}

export default TaskItem;
