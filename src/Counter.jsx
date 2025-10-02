/*Requerimientos:
Crea un componente Counter que permita incrementar, decrementar y resetear un contador.
El contador debe tener un valor mínimo de 0 y máximo de 10. Muestra mensajes cuando se
alcancen los límites. */
import React, { useState } from 'react';

function Counter(){
    const [contador,setContador]=useState(0);

    const aumentarPuntos=()=>{
        setContador(contador+1);
    }

    const decrementarPuntos=()=>{
        setContador(contador-1);
    }

    const resetearPuntos=()=>{
        setContador(0);
    }
}



return(
    <div>
        <h2>Contador</h2>
        <h1>{contador}</h1>
        {contador>0 ? <button onClick={decrementarPuntos}></button> : 'Limite alcanzado'}
        <button onClick={resetearPuntos}></button>
        {contador<10 ? <button onClick={aumentarPuntos}></button> : 'Limite alcanzado'}
    </div>
);

export default Counter;