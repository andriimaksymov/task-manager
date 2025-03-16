import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

export default app;