const express = require("express");
const {
  addReview,
  singleProductReview,
  removeReview,
  singleReview,
} = require("../Controller/reviewController");

const router = express.Router();

router.route("/addreview").post(addReview);
router.route("/productreviews/:id").get(singleProductReview);
router.route("/single/:id").get(singleReview);
router.route("/remove/:id").delete(removeReview);

module.exports = router;
