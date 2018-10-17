const router = require("express").Router();
const pageRoutes = require("./page");
const itemsRoutes = require("./items");

router.use("/page", pageRoutes);
router.use("/items", itemsRoutes);

module.exports = router;
