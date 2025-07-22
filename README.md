# Task Manager API

A simple REST API built with **Express.js** to manage tasks using an in-memory array. This project emphasizes **modular folder structure** with separation of concerns using **Models**, **Controllers**, and **Routes**.

## Instructions

You should create a `src` folder in the `task-manager` directory and inside that:

- `controllers/` folder → place `taskController.js`
- `models/` folder → place `taskModel.js`
- `routes/` folder → place `taskRoutes.js`

All other files stay directly in the root (`task-manager`) directory.

---

## 📁 Folder Structure

```
task-manager/
│
├── src/
│   ├── controllers/        # Business logic (task operations)
│   ├── models/             # Data (in-memory task storage)
│   ├── routes/             # API route definitions
│   └── app.js              # Express app config and middleware
│
├── server.js               # App entry point
├── package.json
└── README.md
```



---

## 🚀 Features

- Create a task ✅  
- Read all tasks / a single task 📄  
- Update a task ✏️  
- Delete a task 🗑  
- Clean and modular folder structure 🧩  
- Dockerized setup 🐳  

---

## 🧾 Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/) (comes with Docker Desktop)

---

## 🛠️ Installation & Setup

### 🐳 Option 1: Run using Docker (recommended)

**1. Build and start the container**:
```bash
docker-compose up --build

To stop the container:
docker-compose down

Installation (manual)
1. Install dependencies
npm install express
npm install

2. Enable ES Modules

In package.json, add:
"type": "module",
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

3. Run the project

Development: npm run dev

Production: npm start

Access the API at:
📍 http://localhost:3000/api/tasks

Author
Built by John Esonu (Windows)

