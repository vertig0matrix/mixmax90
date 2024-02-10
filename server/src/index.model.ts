import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL: string | undefined = 'mongodb://localhost:27017/dream-mixtape-db';

const db = mongoose.connect(`${MONGO_URL}`)
    .then(() => {
        console.log("DB connected 🪩");
    })
    .catch(error => console.log("error in mongoose connection", error));

export default db;