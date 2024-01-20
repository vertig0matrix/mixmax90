
// TODO implement typescript

import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router";
// import dataBaseConnect from "./models/index.model.js";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' })
console.log(process.env.MONGO_URL)

const PORT: number = 3000;
const app: Express = express();

app.use(cors());
app.use(router);

const url: string = process.env.MONGO_URL

mongoose.connect(`${url}`)
  .then(() => {
    console.log("DB connected 🪩");
  }).catch(error => {
    console.log("error in mongoose connection", error)

  });

app.listen(PORT, () => {
  // dataBaseConnect();
  console.log(`Express server listening on port ${PORT} 💋`);
});

