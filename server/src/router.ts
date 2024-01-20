// TODO route to delete saved mixtape

import { Router } from "express";
import controller from "./controllers/index.controller";

const router: Router = Router();

router.get("/toptracks", controller.getPlaylist);
router.post("/toptracks", controller.savePlaylist);

export default router;
