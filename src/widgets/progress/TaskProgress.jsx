import "./TaskProgress.scss";

function TaskProgress({ progress }) {
    return (
        <div className="progress-section">
            <div className="progress-info">
                <span>Progress</span>
                <span>{progress}%</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}

export default TaskProgress;