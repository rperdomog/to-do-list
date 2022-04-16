import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea}) {
    return(
        <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
            <div 
            className={completada ? 'tarea-contenedor-check completada' : 'tarea-contenedor-check'}
            onClick={()=>completarTarea(id)}
            >
                <AiOutlineCheckCircle className='tarea-icono-check' />
            </div>
            <div 
            className='tarea-texto'
            onClick={()=> completarTarea(id)}
            >
                { texto}
            </div>
            <div 
            className='tarea-contenedor-iconos'
            onClick={()=>eliminarTarea(id)}
            >
                <AiOutlineCloseCircle className='tarea-icono'/>
            </div>

        </div>
    );
}

export { Tarea };