import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  // Görevleri tutmak için state kullanıyoruz
  const [tasks, setTasks] = useState([]);

  // Yeni bir görev ekleme fonksiyonu
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(), // Her görev için benzersiz bir ID
      name: taskName, // Görev adı
      completed: false, // Görevin başlangıçta tamamlanmamış durumu
    };
    setTasks([...tasks, newTask]); // Mevcut görev listesine yeni görevi ekle
  };

  // Görevin tamamlanma durumunu değiştirme fonksiyonu
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Bir görevi silme fonksiyonu
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>Görev Takip Uygulaması</h1>
      {/* Görev ekleme bileşeni */}
      <TaskInput onAddTask={addTask} />

      {/* Görev listesi bileşeni */}
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
