import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

const app: Application = express();

app.use(express.json());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");  // Send a response
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
