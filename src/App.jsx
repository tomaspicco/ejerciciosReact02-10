import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Mis Ejercicios React</h1>

      {/* Lista de Tareas */}
      <TodoList />

      {/* Contador */}
      <Counter />
    </div>
  );
}

export default App;

