import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState;
    addTodo: (text: string) => void;
    toggleTodo: (id:string) => void;
    deleteTodo: (id:string) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);