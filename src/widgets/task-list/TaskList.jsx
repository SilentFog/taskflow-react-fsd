import TaskCard from "@/entities/task/ui/TaskCard/TaskCard";
import "./TaskList.scss";

function TaskList({
    todos,
    deleteTask,
    toggleTask,
    editTask,
    editingId,
    editText,
    onEditStart,
    onEditChange,
    onEditSave
}) {
    return (
        <div className="task-list">
            {todos.map((todo) => {
                return (
                    <TaskCard
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        date={todo.date}
                        priority={todo.priority}
                        completed={todo.completed}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        editTask={editTask}
                        editingId={editingId}
                        editText={editText}
                        onEditStart={onEditStart}
                        onEditChange={onEditChange}
                        onEditSave={onEditSave}
                    />
                );
            })}
        </div>
    );
}

export default TaskList;