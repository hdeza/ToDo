import { useState } from 'react';
import './Task.css';
import { MdOutlineDeleteOutline } from "react-icons/md";


export const Task = ({taskText, deleteTask}) =>{
    return(
        <div className='tarea'>
            {/* <input type="checkbox" name="" id="" /> */}
            <h1>{taskText}</h1> 
            <button onClick={deleteTask}>
                <MdOutlineDeleteOutline className='delete'/>
            </button>
            {/* Al cambiar onClick={deleteTask(index)} a onClick={() => deleteTask(index)}, evitas la invocación de deleteTask 
            directamente durante la renderización del componente Task. En su lugar, pasas una función de callback que se 
            ejecutará cuando se haga clic en el botón. */}
        </div>
    )
}