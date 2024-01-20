// TODO route to delete saved mixtape

import { Router } from "express";
import { getPlaylist, savePlaylist } from "./controllers/index.controller";

const router: Router = Router();

router.get("/toptracks", getPlaylist);
router.post("/toptracks", savePlaylist);

export default router;
