const express = require("express");
const {
  addCart,
  userCart,
  removeCart,
  updateQuantity,
} = require("../Controller/cartController");

const router = express.Router();

router.route("/addCart").post(addCart);
router.route("/userCart/:userId").get(userCart);
router.route("/update").put(updateQuantity);
router.route("/remove/:id").delete(removeCart);

module.exports = router;
