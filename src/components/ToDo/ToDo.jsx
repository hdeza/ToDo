import { useEffect, useState } from "react"
import { Task } from "../task/Task";



export const ToDo = () => {

    const [task,setTask] = useState(''); //tarea que se está escribiendo
    const [taskIdea,setTaskIdea] = useState(''); // placeholder aleatorio
    const [taskList,setTaskList] = useState([]); //lista de tareas
    
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
            //se actualiza la taskList con un array que contenga lo anterior más un nuevo componente
            const newTask = [...taskList, <Task taskText={task} size={taskList.length} deleteTask={()=>deleteTask(taskList.length)}/>];
            setTaskList(newTask);
            setTask('');
        }
    }

    const deleteTask = (index) => {
        // Se utiliza el método filter() en el taskList para crear un nuevo array llamado updatedTaskList. 
        // La función de callback en filter() se ejecuta para cada tarea en el taskList.
        const updatedTaskList = taskList.filter(task => task.index !== index);
        // En la función de callback, comparamos el id de cada tarea con el id de la tarea que se desea eliminar. 
        // Si el id no coincide, la tarea se conserva en el nuevo array updatedTaskList.
        setTaskList(updatedTaskList);

    }

   

    
    
    
    return(
        <div className="ToDo">
            <input type="text" value={task} placeholder={taskIdea} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addTask}>+</button>
            {taskList.map((taskDinamic,index) => (
                <div key={index}>{taskDinamic}</div>
            ))}
        </div>
    )
}