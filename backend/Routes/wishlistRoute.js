const express = require("express");
const { userWishlist, removeWishlist, addWishlist } = require("../Controller/wishlistController");

const router = express.Router();

router.route("/addwishlist").post(addWishlist);
router.route("/userWishlist/:userId").get(userWishlist);
router.route("/remove/:id").delete(removeWishlist);

module.exports = router;