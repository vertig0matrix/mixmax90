"use strict";
// TODO implement typescript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
// import dataBaseConnect from "./models/index.model.js";
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT} 💋`);
});
