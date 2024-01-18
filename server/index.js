// TODO delete dotenv and remove npm 
// TODO use one section to connect to database and server
// TODO create config env for sensitive data  
// TODO implement typescript
// TODO address git ignore


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");
const dataBaseConnect = require("./models/index.model.js")

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT} 💋`);
});

