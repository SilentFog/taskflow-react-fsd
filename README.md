# 📝 TaskFlow — Modern Task Management App

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Sass/SCSS](https://img.shields.io/badge/Sass-SCSS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![BEM](https://img.shields.io/badge/Architecture-BEM-6366F1?style=flat)](https://en.bem.info/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

> A clean, responsive task manager built with **React 19** and **Feature-Sliced Design (FSD)**.  
> Features a real-time weather widget, advanced filtering, progress analytics, and local persistence.

| TaskFlow Preview 1 | TaskFlow Preview 2 |
| :---: | :---: |
| ![Demo 1](https://github.com/user-attachments/assets/dbf21a85-3b8d-482a-8e67-0083d152fdf6) | ![Demo 2](https://github.com/user-attachments/assets/d63ffe1d-4d6c-455e-b149-37e3e222495b) |
🔗 **[Live Demo](https://taskflow-react-fsd.vercel.app/)** | 📦 **[GitHub Repository](https://github.com/SilentFog/taskflow-react-fsd)**

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Full CRUD** | Create, edit, delete, and toggle task completion states |
| **Weather Widget** | Real-time weather data integration by city via **Open-Meteo API** |
| **Smart Filtering** | Instant search and filter by status (*All / Active / Completed*) and priority (*Low / Medium / High*) |
| **Progress Analytics** | Dynamic progress bar accompanied by live task counters |
| **Theme Toggle** | Seamless Light and Dark mode switching |
| **Data Persistence** | Automatic state saving and retrieval using `localStorage` |


---

## 🛠 Tech Stack

* **Core:** React 19, JavaScript (ES6+)
* **Build Tool:** Vite
* **Styling:** SCSS, BEM Methodology
* **Architecture:** Feature-Sliced Design (FSD)
* **API:** Open-Meteo REST API

---

## 🏗 Architecture — Feature-Sliced Design (FSD)

The project strictly follows **Feature-Sliced Design** guidelines for scalability, maintainability, and clear separation of concerns:

```text
src/
├── app/          # Global providers, styles, and initialization
├── pages/        # Page composition (e.g., TaskBoardPage)
├── widgets/      # Composite UI blocks (Header, TaskList, TaskForm, TaskFilters)
├── features/     # User interactions and use-cases (filter-tasks, edit-task)
├── entities/     # Domain logic, data models & custom hooks (task, taskStats)
└── shared/       # Reusable UI kit, utilities, and API clients
```


## 🚀 Quick Start

Follow these steps to get a local development copy up and running.

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/SilentFog/taskflow-react-fsd.git
```

2. **Navigate to the project directory**

```bash
cd taskflow-react-fsd
```

3. **Install dependencies**

```bash
npm install
```

4. **Start development server**

```bash
npm run dev
```

5. **Open in browser**

Navigate to `http://localhost:5173` to view the application.

---

## 🎨 UI Themes

<p align="center">
  <br><strong>Light Theme</strong><br>
  <img width="100%" alt="Light Theme" src="https://github.com/user-attachments/assets/19fc2ee3-2c13-422d-a23c-d3a5b1748b3b" />
  <br><br>
  <br><strong>Dark Theme</strong><br>
  <img width="100%" alt="Dark Theme" src="https://github.com/user-attachments/assets/1b63008f-dfe7-46b8-970d-6f049a3639ae" />
</p>


