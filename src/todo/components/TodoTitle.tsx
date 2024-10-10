import { useTodos } from '../hooks/useTodos';
export const TodoTitle = () => {
    const {pendingTodos, completedTodos, todosCount} = useTodos();

    return (
        <>
            <h1>Todos: {todosCount} </h1>
            <div>
                <h2>Pendientes: {pendingTodos}</h2>
                <h2>Completados: {completedTodos}</h2>
            </div>
        </>
    );
}
