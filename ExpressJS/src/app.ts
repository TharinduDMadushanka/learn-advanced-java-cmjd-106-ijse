import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");  // Send a response
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
