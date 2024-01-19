
// TODO implement typescript


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router.js");
const dataBaseConnect = require("./models/index.model.js")

const PORT = 3000;
const app = express();

app.use(cors());
// app.use(express.json());
app.use(router);


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} 💋`);
});

