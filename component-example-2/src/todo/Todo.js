function Todo({task, onClick}) {
    return (
        <li> 
            <input type="checkbox" checked={task.done} onClick={onClick}></input> 
            {task.name} 
        </li>);
}

export default Todo;