import { useState, useEffect } from "react";


const INITIAL_TASKS = [
    {
        id: 1,
        text: "Plan weekly goals and task priorities",
        date: "2026-09-21",
        priority: "high",
        completed: true,
    },
    {
        id: 2,
        text: "Buy groceries and household essentials",
        date: "2026-09-22",
        priority: "medium",
        completed: true,
    },
    {
        id: 3,
        text: "Schedule team sync and project review",
        date: "2026-09-23",
        priority: "high",
        completed: false,
    },
    {
        id: 4,
        text: "Read 20 pages of a book",
        date: "2026-09-25",
        priority: "low",
        completed: false,
    },
];

export function useTasks() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            try {
                const parsed = JSON.parse(savedTodos);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            } catch (error) {
                console.error("Failed to parse saved todos:", error);
            }
        }


        return INITIAL_TASKS;
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTask = (taskData) => {
        const newTask = {
            id: Date.now(),
            ...taskData,
            completed: false,
        };
        setTodos((prev) => [...prev, newTask]);
    };

    const deleteTask = (taskId) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== taskId));
    };

    const toggleTask = (taskId) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTask = (taskId, newText) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === taskId ? { ...todo, text: newText } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };

    const clearAll = () => {
        setTodos([]);
    };

    return {
        todos,
        createTask,
        deleteTask,
        toggleTask,
        editTask,
        clearCompleted,
        clearAll,
    };
}