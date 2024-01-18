// TODO delete dotenv and remove npm 
// TODO use one section to connect to database and server
// TODO create config env for sensitive data  
// TODO implement typescript
// TODO address git ignore

const dotenv = require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./router");

const PORT = 3000;
const app = express();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(`${MONGO_URL}`).then(() => {
  console.log("DB connected 🪩");
});

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} 💋`);
});
