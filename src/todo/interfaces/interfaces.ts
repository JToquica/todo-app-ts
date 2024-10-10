export interface Todo {
    id: string;
    descripcion: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
}