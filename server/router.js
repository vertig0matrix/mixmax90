const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", (req, res) => {
  res.send("Hello sweetie!");
});

router.get("/collection", controller.getCollection);
router.post("/collection", controller.addToCollection);
// router.delete("/collection/:id", controller.updateItem);
// router.delete("/collection/:id", controller.deleteItem);

module.exports = router;
