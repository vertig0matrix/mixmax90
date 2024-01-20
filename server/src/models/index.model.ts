import mongoose from "mongoose";
import dotenv from 'dotenv';

const dataBaseConnect = mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => {
        console.log("DB connected 🪩");
    }).catch(error => console.log("error in mongoose connection", error));

export default dataBaseConnect;