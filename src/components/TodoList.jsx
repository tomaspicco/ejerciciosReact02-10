import { useState } from "react";
import './ComponentesHook.css';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="todo-list">
      <h2>Lista de Tareas</h2>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="todo-text" onClick={() => toggleTask(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Tareas pendientes:</strong> {pendingTasks}
      </p>
    </div>
  );
}

export default TodoList;
