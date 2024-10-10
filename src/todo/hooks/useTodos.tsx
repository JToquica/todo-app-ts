import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
    const { todoState, toggleTodo, addTodo, deleteTodo } = useContext(TodoContext);
    const { todos } = todoState;

    return {
        todosCount: todos.length,
        todos: todos,
        pendingTodos: todos.filter(todo => !todo.completed).length,
        completedTodos: todos.filter(todo => todo.completed).length,
        toggleTodo,
        addTodo,
        deleteTodo
    }
}