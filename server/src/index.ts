import express, { Express } from "express";
import cors from "cors";
import router from "./router";
import db from './index.model';

const PORT: number = 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Express server listening on port ${PORT} 💋`);
    });
    await db; 

  } catch (error) {
    console.error('Failed to Start Server', error);
  }
};

startServer();
