import { useState } from "react";
import TaskBoardPage from "../pages/task-board/TaskBoardPage";
function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div data-theme={theme}>
            <TaskBoardPage
                theme={theme}
                onToggleTheme={toggleTheme}
            />
        </div>
    );
}

export default App;