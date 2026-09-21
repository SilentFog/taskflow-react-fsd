import "./TaskFilters.scss";

function TaskFilters({
    filter,
    onFilterChange,
    onClearCompleted,
    onClearAll,
    selectedPriority,
    onPriorityChange
}) {
    return (
        <div className="filters">
            <div className="filter-buttons">
                <button
                    className={`filter ${filter === "all" ? "active-filter" : ""}`}
                    onClick={() => onFilterChange("all")}
                >
                    All
                </button>

                <button
                    className={`filter ${filter === "active" ? "active-filter" : ""}`}
                    onClick={() => onFilterChange("active")}
                >
                    Active
                </button>

                <button
                    className={`filter ${filter === "completed" ? "active-filter" : ""}`}
                    onClick={() => onFilterChange("completed")}
                >
                    Completed
                </button>

                <select
                    className="filter priority-filter"
                    value={selectedPriority}
                    onChange={(e) => onPriorityChange(e.target.value)}
                >
                    <option value="all">Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className="clear-actions">
                <button
                    className="filter-action"
                    onClick={onClearCompleted}
                >
                    Clear Completed
                </button>

                <button
                    className="filter-action danger"
                    onClick={onClearAll}
                >
                    Clear All
                </button>
            </div>
        </div>
    );
}

export default TaskFilters;
