

export const Task = ({taskText, size, deleteTask}) =>{
    return(
        <section>
            <input type="checkbox" name="" id="" />
            <h1 key={size}>{taskText}</h1>
            <button onClick={deleteTask}>x</button>
        </section>
    )
}