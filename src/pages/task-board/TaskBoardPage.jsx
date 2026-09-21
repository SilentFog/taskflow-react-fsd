import { useState } from "react";


import { useTasks, getTaskStats } from "@/entities/task";
import { filterTasks } from "@/features/filter-tasks/model/filterTasks";
import { useEditTask } from "@/features/edit-task/model/useEditTask";


import Header from "../../widgets/header/Header";
import TaskForm from "../../widgets/task-form/TaskForm";
import TaskStats from "../../widgets/task-stats/TaskStats";
import TaskFilters from "../../widgets/task-filters/TaskFilters";
import TaskList from "../../widgets/task-list/TaskList";
import TaskProgress from "@/widgets/progress/TaskProgress";

import "./TaskBoardPage.scss";

function TaskBoardPage({ theme, onToggleTheme }) {
 
    const {
        todos,
        createTask,
        deleteTask,
        toggleTask,
        editTask,
        clearCompleted,
        clearAll,
    } = useTasks();


    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("all");
    const [selectedPriority, setSelectedPriority] = useState("all");

   
    const { editingId, editText, setEditText, startEditing, saveEdit } =
        useEditTask(editTask);


    const { total, active, completed, progress } = getTaskStats(todos);
    const filteredTodos = filterTasks(todos, {
        searchQuery,
        filter,
        selectedPriority,
    });

    return (
        <div className="app">
            <div className="shape shape-one"></div>
            <div className="shape shape-two"></div>
            <div className="shape shape-three"></div>
            <div className="shape shape-four"></div>

            <main className="todo-container">
                <Header
                    theme={theme}
                    onToggleTheme={onToggleTheme}
                    onSearchChange={setSearchQuery}
                    search={searchQuery}
                />

                <TaskForm onCreateTask={createTask} />

                <TaskStats total={total} active={active} completed={completed} />

                <TaskProgress progress={progress} />

                <TaskFilters
                    filter={filter}
                    onFilterChange={(status) => setFilter(status.toLowerCase())}
                    onClearCompleted={clearCompleted}
                    onClearAll={clearAll}
                    selectedPriority={selectedPriority}
                    onPriorityChange={setSelectedPriority}
                />

                <TaskList
                    todos={filteredTodos}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    editingId={editingId}
                    editText={editText}
                    onEditStart={startEditing}
                    onEditChange={setEditText}
                    onEditSave={saveEdit}
                />
            </main>
        </div>
    );
}

export default TaskBoardPage;