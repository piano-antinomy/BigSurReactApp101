import Todo from "./Todo";
import './Todos.css';
function Todos({todos, onClick}) {
    return (
        <ul className="Todos">
            {
            todos.map((t, i) => 
              <div>
                <Todo task={t} onClick={() => onClick(i)}></Todo>
              </div>
              )
            }
          </ul>
    );
}

export default Todos;