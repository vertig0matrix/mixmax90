const mongoose = require("mongoose");
const mongo_URL = require('../.env')

const dataBaseConnect = mongoose.connect(mongo_URL).then(() => {
    console.log("DB connected 🪩");
}).catch(error => console.log("error in mongoose connection", error));

module.exports = dataBaseConnect;