import "./TaskCard.scss";
import React from "react";

function TaskCard({
    id,
    text,
    date,
    priority,
    completed,
    deleteTask,
    toggleTask,
    editingId,
    editText,
    onEditChange,
    onEditStart,
    onEditSave
}) {
    const isEditing = editingId === id;

    return (
        <div className={`task ${completed ? "completed" : ""}`}>
            {/* Custom Checkbox */}
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={completed}
                    onChange={() => toggleTask(id)}
                />
                <span className="checkbox-checkmark"></span>
            </label>

            <div className="task-content">
                {isEditing ? (
                    <input
                        type="text"
                        className="task-edit-input"
                        value={editText}
                        onChange={(e) => onEditChange(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && onEditSave(id)}
                        autoFocus
                    />
                ) : (
                    <span className="task-text">{text}</span>
                )}

                <div className="task-meta">
                    {date && (
                        <span className="task-date">
                            📅 {date}
                        </span>
                    )}

                    <span className={`priority priority-${priority}`}>
                        {priority}
                    </span>
                </div>
            </div>

            <div className="task-actions">
                {isEditing ? (
                    <button
                        type="button"
                        className="action-btn save-button"
                        onClick={() => onEditSave(id)}
                        title="Save"
                    >
                        ✓
                    </button>
                ) : (
                    <button
                        type="button"
                        className="action-btn edit-button"
                        onClick={() => onEditStart(id, text)}
                        title="Edit"
                    >
                        ✎
                    </button>
                )}

                <button
                    type="button"
                    className="action-btn delete-button"
                    onClick={() => deleteTask(id)}
                    title="Delete"
                >
                    ×
                </button>
            </div>
        </div>
    );
}

export default TaskCard;