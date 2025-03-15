import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db';

dotenv.config();

connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

export default app;