export function filterTasks(todos, { searchQuery, filter, selectedPriority }) {
    return todos.filter((todo) => {
        const matchesSearch = todo.text
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesFilter =
            filter === "all"
                ? true
                : filter === "completed"
                ? todo.completed === true
                : todo.completed === false;

        const matchesPriority =
            selectedPriority === "all" || todo.priority === selectedPriority;

        return matchesSearch && matchesFilter && matchesPriority;
    });
}