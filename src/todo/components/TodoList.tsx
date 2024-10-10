import { TodoItem } from "./TodoItem";
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {
    const { todos } = useTodos();

    return (
        <ul>
            {
                todos.length > 0
                ?
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                : 
                    <p>No hay tareas por hacer</p>
            }
        </ul>
    )
}
