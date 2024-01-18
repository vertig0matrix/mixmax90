// TODO route to delete saved mixtape


const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.get("/toptracks", controller.getTopTracks);
router.post("/toptracks", controller.addTopTracks);
router.post("/collection", controller.addToCollection);

module.exports = router;
