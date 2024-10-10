import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export const AddTodo = () => {
    const [text, setText] = useState<string>('');
    const { addTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (text.trim() !== "") {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex gap-3 align-items-center">
                <label htmlFor="todo" className="form-label">Todo:</label>
                <input
                    type="text"
                    value={text}
                    name="todo"
                    id="todo"
                    onChange={(e) => setText(e.target.value)}
                    className="form-control"
                />
                <button type="submit">Añadir</button>
            </div>
        </form>
    )
}
