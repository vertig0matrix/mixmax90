"use strict";
// TODO implement typescript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
// import dataBaseConnect from "./models/index.model.js";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
console.log(process.env.MONGO_URL);
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(router_1.default);
const url = process.env.MONGO_URL;
mongoose_1.default.connect(`${url}`)
    .then(() => {
    console.log("DB connected 🪩");
}).catch(error => {
    console.log("error in mongoose connection", error);
});
app.listen(PORT, () => {
    // dataBaseConnect();
    console.log(`Express server listening on port ${PORT} 💋`);
});
