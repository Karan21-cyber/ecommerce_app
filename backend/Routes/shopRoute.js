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
    cb(null, "../../frontend");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", fetchShop);
router.post("/addShop", upload.single("file"), addShop); // Corrected: Use router.post instead of router.route and specify upload.single("file") to handle a single file upload
router.get("/singleShop/:id", singleShop);
router.put("/update", updateShop);
router.delete("/remove/:id", removeShop);

module.exports = router;
