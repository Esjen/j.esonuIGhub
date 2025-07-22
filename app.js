import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Mount routes
app.use('/api/tasks', taskRoutes);

export default app;
