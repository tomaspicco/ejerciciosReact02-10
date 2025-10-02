import { useState } from "react";
import './ComponentesHook.css';


function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("Has alcanzado el valor máximo (10)");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    } else {
      setMessage("No puedes bajar del valor mínimo (0)");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("Contador reseteado");
  };

  return (
    <div className="counter">
      <h2>Contador: {count}</h2>
      <div className="counter-controls">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
      {message && <p style={{ color: "white" }}>{message}</p>}
    </div>
  );
}

export default Counter;
