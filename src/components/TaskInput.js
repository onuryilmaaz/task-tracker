import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  // Görev adı için state kullanıyoruz
  const [taskName, setTaskName] = useState("");

  // Görev ekleme işlemi
  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      // Boş görev eklenmesini önlüyoruz
      onAddTask(taskName); // Yeni görevi üst bileşene iletiyoruz
      setTaskName(""); // Input alanını temizliyoruz
    }
  };

  // Enter tuşuna basıldığında görev ekle
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Görev Adı"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} // Input değerini güncelle
        onKeyDown={handleKeyPress}
        className="input"
      />
      <button onClick={handleAddTask} className="button">
        Ekle
      </button>
    </div>
  );
}

export default TaskInput;
