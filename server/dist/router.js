"use strict";
// TODO route to delete saved mixtape
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("./controllers/index.controller");
const router = (0, express_1.Router)();
router.get("/toptracks", index_controller_1.getPlaylist);
router.post("/toptracks", index_controller_1.savePlaylist);
exports.default = router;
