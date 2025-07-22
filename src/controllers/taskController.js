import { tasks } from '../models/taskModel.js';

let currentId = tasks.length;

// GET all tasks
export const getAllTasks = (req, res) => {
  res.json(tasks);
};

// GET task by ID
export const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  task ? res.json(task) : res.status(404).json({ error: 'Task not found' });
};

// POST new task
export const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTask = { id: ++currentId, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// PUT update task
export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
};

// DELETE task
export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
};
