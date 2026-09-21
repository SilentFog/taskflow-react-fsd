# 📝 TaskFlow — Modern Task Management App

> A clean, responsive task manager built with **React 19** and **Feature-Sliced Design**.  
> Real-time weather widget, advanced filtering, progress analytics, and full local persistence.

🔗 **Live Demo:** []  
📦 **Repository:** [GitHub](https://github.com/SilentFog/taskflow-react-fsd)

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Full CRUD** | Create, edit, delete, and toggle task completion |
| **Weather Widget** | Real-time weather by city (Open-Meteo API) |
| **Smart Filtering** | Search + filter by status (All / Active / Completed) and priority (Low / Medium / High) |
| **Progress Analytics** | Dynamic progress bar + live task counters |
| **Theme Toggle** | Seamless Light / Dark mode |
| **Data Persistence** | Automatic save & restore via `localStorage` |

---

## 🏗 Architecture — Feature-Sliced Design (FSD)

The project strictly follows **Feature-Sliced Design** for scalability and clear separation of concerns:

```text
src/
├── app/          # Global providers, styles, initialization
├── pages/        # Page composition (TaskBoardPage)
├── widgets/      # Composite UI blocks (Header, TaskList, TaskForm, TaskFilters)
├── features/     # User interactions (filter-tasks, edit-task)
├── entities/     # Domain logic & hooks (task, taskStats)
└── shared/       # UI kit, utilities, API clients

🛠 Tech Stack:

    Core: React 19, JavaScript (ES6+)

    Build Tool: Vite

    Styling: SCSS / BEM Methodology

    Architecture: Feature-Sliced Design (FSD)

    API: Open-Meteo REST API


🚀 Quick Start

# 1. Clone the repository
git clone https://github.com/SilentFog/taskflow-react-fsd.git
cd taskflow-react-fsd

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

The app will be available at http://localhost:5173.

