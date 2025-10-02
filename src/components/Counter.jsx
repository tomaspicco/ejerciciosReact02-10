import { useState } from "react";
import './ComponentesHook.css';

function Contador() {
  const [valor, setValor] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const incrementar = () => {
    if (valor < 10) {
      setValor(valor + 1);
      setMensaje("");
    } else {
      setMensaje("Has alcanzado el valor máximo (10)");
    }
  };

  const decrementar = () => {
    if (valor > 0) {
      setValor(valor - 1);
      setMensaje("");
    } else {
      setMensaje("No puedes bajar del valor mínimo (0)");
    }
  };

  const reiniciar = () => {
    setValor(0);
    setMensaje("Contador reiniciado");
  };

  return (
    <div className="contador">
      <h2>Contador: {valor}</h2>
      <div className="contador-controles">
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
        <button onClick={reiniciar}>Reset</button>
      </div>
      {mensaje && <p style={{ color: "white" }}>{mensaje}</p>}
    </div>
  );
}

export default Contador;
