const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");
// console.log(pageController.findById());
router.route("/")
    .get(itemsController.getItems)

module.exports = router;