# Task Manager API

A simple REST API built with **Express.js** to manage tasks using an in-memory array. This project emphasizes **modular folder structure** with separation of concerns using **Models**, **Controllers**, and **Routes**.

## Instructions

you should create a src folder in the task-manager directory and in the src folder, you should have a controllers folder and in the controllers folder you should place the taskController.js in it.
In the src folder, you should also create a models folder and in the folder, you should place the taskModel.js in it.
In the src folder again, you should have a routes folder created and in the routes folder, you should place the taskRoutes.js in it.
All the other files are directly in the task-manager folder(main directory)

---

## 📁 Folder Structure

task-manager/
│
├── src/
│ ├── controllers/ # Business logic (task operations)
│ ├── models/ # Data (in-memory task storage)
│ ├── routes/ # API route definitions
│ └── app.js # Express app config and middleware
│
├── server.js # App entry point
├── package.json
└── README.md


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

1. **Build and start the container**:

```bash
docker-compose up --build



---

## 📦 Installation

**1. install dependencies**

npm install express(assuming you already have nodejs installed)
npm install(to install dependencies)

**2. Set the project to use ES Modules**
In your package.json, ensure this line is present: 
"type": "module"

Add these to your package.json:
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
 
**3. Run the project**
The server will be available at:
📍 http://localhost:3000/api/tasks

Stop the container:

```bash

docker-compose down


npm run dev (To run server with nodemon / In development mode)
npm start (To run server with Node.js / In production mode)

# Author :
Built with Windows by John Esonu

