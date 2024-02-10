"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = 'mongodb://localhost:27017/dream-mixtape-db';
const db = mongoose_1.default.connect(`${MONGO_URL}`)
    .then(() => {
    console.log("DB connected 🪩");
})
    .catch(error => console.log("error in mongoose connection", error));
exports.default = db;
