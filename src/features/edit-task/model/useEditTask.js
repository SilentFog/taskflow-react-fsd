import { useState } from "react";

export function useEditTask(editTaskCallback) {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const startEditing = (taskId, text) => {
        setEditingId(taskId);
        setEditText(text);
    };

    const saveEdit = (taskId) => {
        editTaskCallback(taskId, editText);
        setEditingId(null);
        setEditText("");
    };

    return {
        editingId,
        editText,
        setEditText,
        startEditing,
        saveEdit,
    };
}