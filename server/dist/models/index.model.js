"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dataBaseConnect = mongoose_1.default.connect(`${process.env.MONGO_URL}`)
    .then(() => {
    console.log("DB connected 🪩");
}).catch(error => console.log("error in mongoose connection", error));
exports.default = dataBaseConnect;
