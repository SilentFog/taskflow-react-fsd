import "./TaskStats.scss"
function TaskStats({ total, active, completed }) {
    return (
        <div className="stats">
            <div className="stat-card">
                <span className="stat-number">{total}</span>
                <span className="stat-label">Total</span>
            </div>

            <div className="stat-card">
                <span className="stat-number">{active}</span>
                <span className="stat-label">Active</span>
            </div>

            <div className="stat-card">
                <span className="stat-number">{completed}</span>
                <span className="stat-label">Completed</span>
            </div>
        </div>
    );
}

export default TaskStats;