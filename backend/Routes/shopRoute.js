const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  addShop,
  fetchShop,
  singleShop,
  updateShop,
  removeShop,
} = require("../Controller/shopController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../frontend/uploads/shops/"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.route("/").get(fetchShop);
router.route("/addShop").post(upload.single("image"), addShop);
router.route("/singleShop/:id").get(singleShop);
router.route("/update").put(updateShop);
router.route("/remove/:id").delete(removeShop);

module.exports = router;
