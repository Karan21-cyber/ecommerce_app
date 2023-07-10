const express = require("express");
const multer = require("multer");
const {
  addShop,
  fetchShop,
  singleShop,
  updateShop,
  removeShop,
} = require("../Controller/shopController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "path of file");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

const router = express.Router();

router.route("/").get(fetchShop);
router.post("/addShop", uploads.single("file"), addShop); // Corrected: Use router.post instead of router.route and specify uploads.single("file") to handle a single file upload
router.route("/singleShop/:id").get(singleShop);
router.route("/update").put(updateShop);
router.route("/remove/:id").delete(removeShop);

module.exports = router;
