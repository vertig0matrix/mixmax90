"use strict";
// TODO route to delete saved mixtape
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("./controllers/index.controller"));
const router = (0, express_1.Router)();
router.get("/toptracks", index_controller_1.default.getPlaylist);
router.post("/toptracks", index_controller_1.default.savePlaylist);
exports.default = router;
