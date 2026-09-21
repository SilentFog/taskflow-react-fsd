// src/entities/task/model/taskStats.js
export function getTaskStats(todos) {
    const total = todos.length;
    const completed = todos.filter(({ completed }) => completed).length;
    const active = total - completed;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, active, completed, progress };
}