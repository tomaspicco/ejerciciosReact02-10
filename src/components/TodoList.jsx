import { useState } from "react";
import './ComponentesHook.css';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  };

  const alternarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const tareasPendientes = tareas.filter((tarea) => !tarea.completada).length;

  return (
    <div className="todo-list">
      <h2>Lista de Tareas</h2>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <span className="todo-text" onClick={() => alternarTarea(tarea.id)}>
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Tareas pendientes:</strong> {tareasPendientes}
      </p>
    </div>
  );
}

export default ListaTareas;
