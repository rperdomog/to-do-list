import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada}) {
    return(
        <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
            <div className='tarea-texto'>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'>
                <AiOutlineCloseCircle className='tarea-icono'/>
            </div>

        </div>
    );
}

export { Tarea };