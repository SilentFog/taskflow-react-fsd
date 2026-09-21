import './Header.scss'
import Weather from '../weather/Weather'

function Header({
    theme,
    onToggleTheme,
    search,
    onSearchChange,
}) {
    return (
        <header className="header">


            <div className="header-actions">
                <h1>My Tasks</h1>

                <input
                    type="text"
                    className="search-input"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />

                <div className="header-weather">
                    <Weather />
                </div>

                <button
                    className="theme-button"
                    onClick={onToggleTheme}
                >
                    {theme === "light" ? "☾" : "☀"}
                </button>

            </div>
        </header>
    );
}

export default Header;