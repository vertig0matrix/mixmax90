
// TODO implement typescript

import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router";
// import dataBaseConnect from "./models/index.model.js";

const PORT: number = 3000;
const app: Express = express();

app.use(cors());
app.use(router);


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} 💋`);
});

