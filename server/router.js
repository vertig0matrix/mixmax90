// TODO route to delete saved mixtape


const express = require("express");
const controller = require("./controllers/index.controller");

const router = express.Router();

router.get("/toptracks", controller.getPlaylist);
router.post("/toptracks", controller.savePlaylist);

module.exports = router;
