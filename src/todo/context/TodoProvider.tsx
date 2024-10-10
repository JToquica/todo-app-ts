import { PropsWithChildren, useReducer } from "react";

import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";
import { TodoState } from "../interfaces/interfaces";

const INITIAL_STATE:TodoState = {
    todos: []
}

export const TodoProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id:string) => {
        dispatch({type: "toggleTodo", payload: {id}})
    }

    const addTodo = (texto:string) => {
        dispatch({type: "addTodo", payload: texto})
    }

    const deleteTodo = (id:string) => {
        dispatch({type: "deleteTodo", payload: {id}})
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            addTodo,
            toggleTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}
