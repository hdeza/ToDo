import { useEffect, useState } from "react"
import { Task } from "../task/Task";
import './ToDo.css';


export const ToDo = () => {

    const [task,setTask] = useState(''); //tarea que se está escribiendo
    const [taskIdea,setTaskIdea] = useState(''); // placeholder aleatorio
    const [taskList,setTaskList] = useState([]); //lista de tareas
    const [nextId,setNextId] = useState(1); //id para identificar cada tarea
    
    //usamos el useEffect para generar una tarea aleatoria una vez, cuando el componente se monta
    useEffect(()=>{
        const taskIdeas = [  //Este es un array que contiene ejemplo de tareas
            "Hacer ejercicio",
            "Leer un libro",
            "Llamar a un amigo",
            "Aprender algo nuevo",
            "Organizar el espacio de trabajo",
        ];
        // conseguimos un numero aleatorio respecto al tamaño del array
        const taskRandom = taskIdeas[Math.floor(Math.random() * taskIdeas.length)];
        setTaskIdea(taskRandom); // cambiamos el estado del placeholder aleatorio
    },[]);

    //añadimos la siguiente tarea y reseteamos la variable task
    const addTask = () => {
        if(task !== ''){ //verificar que existe una tarea y no una cadena vacia
            const newTask = {id: nextId, text: task} // este será el objeto que irá dentro de cada elemento en la tasklist
            //se actualiza la taskList con un array que contenga lo anterior más la nueva tarea
            setTaskList([...taskList, newTask]);
            setNextId(nextId+1);
            setTask('');
        }
    }

    const deleteTask = (index) => {
        // Se utiliza el método filter() en el taskList para crear un nuevo array llamado updatedTaskList. 
        // La función de callback en filter() se ejecuta para cada tarea en el taskList.
        const updatedTaskList = taskList.filter(tarea => tarea.id !== index);
        
        // En la función de callback, comparamos el id de cada tarea con el id de la tarea que se desea eliminar. 
        // Si el id no coincide, la tarea se conserva en el nuevo array updatedTaskList.
        setTaskList(updatedTaskList);

    }

    return(
        <div className="ToDo">
            <div className="box-task">
                <input type="text" value={task} placeholder={taskIdea} onChange={(e) => setTask(e.target.value)}/>
                <button onClick={addTask}>+</button>
            </div>
            <div className="box-tasks">
                {taskList.map((tarea) => ( //se mapea todo el array para tener el objeto y poner manipular cada uno de sus valores
                    <div key={tarea.id}>
                        {/* se rendereiza un componente task por cada elemento del array tasklist */}
                        <Task taskText={tarea.text} deleteTask={() => deleteTask(tarea.id)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}