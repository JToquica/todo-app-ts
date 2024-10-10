import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoTitle } from "./components/TodoTitle";
import { TodoProvider } from "./context/TodoProvider";

export const Todo = () => {
    return (
        <TodoProvider>
            <TodoTitle />
            <AddTodo />
            <TodoList />
        </TodoProvider>
    );
}