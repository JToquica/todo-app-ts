import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = 
    | { type: "addTodo", payload: string}
    | { type: "toggleTodo", payload: {id: string}}
    | { type: "deleteTodo", payload: {id: string}};

export const todoReducer = (state: TodoState, action: TodoAction):TodoState => {
    switch (action.type) {
        case "addTodo":
            const newTodo:Todo = {
                id: Date.now().toString(),
                descripcion: action.payload,
                completed: false
            }

            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case "toggleTodo":
            return {
                ...state,
                todos: state.todos.map(({...todo}) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }

                    return todo;
                })
            };
        case "deleteTodo":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };
        default:
            return state;
    }
}