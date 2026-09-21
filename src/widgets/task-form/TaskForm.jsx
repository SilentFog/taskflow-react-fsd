import { useState } from "react";
import "./TaskForm.scss";

function TaskForm({ onCreateTask }) {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("");

    const handleSubmit = () => {
        if (!text.trim()) return;

        onCreateTask({
            text,
            date,
            priority
        });

        setText("");
        setDate("");
        setPriority("");
    };

    return (
        <div className="add-task">
            <input
                type="text"
                className="task-input"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <input
                type="date"
                className="date-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <select
                className="priority-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button
                className="add-button"
                onClick={handleSubmit}
            >
                +
            </button>
        </div>
    );
}

export default TaskForm;

