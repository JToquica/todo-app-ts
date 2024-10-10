import { Todo } from "../interfaces/interfaces"
import { useTodos } from "../hooks/useTodos"

interface props {
    todo: Todo
}

export const TodoItem = ({todo}:props) => {
    const {toggleTodo, deleteTodo} = useTodos();

    return (
        <li 
            style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "",
                userSelect: "none",
                textAlign: "start"
            }} 
            onDoubleClick={() => toggleTodo(todo.id)}
        >
            {todo.descripcion}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}
