

export const Task = ({taskText, deleteTask}) =>{
    return(
        <section>
            <input type="checkbox" name="" id="" />
            <h1>{taskText}</h1>
            <button onClick={deleteTask}>x</button>
        </section>
    )
}