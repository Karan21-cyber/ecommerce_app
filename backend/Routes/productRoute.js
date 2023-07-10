const express = require("express");

const { fetchAll, singleProduct, updateProduct, removeProduct, addProduct } = require("../Controller/productController");
const router = express.Router();

router.route("/").get(fetchAll);
router.route("/addproduct").post(addProduct);
router.route("/singleProduct/:id").get(singleProduct);
router.route("/update").put(updateProduct);
router.route("/remove/:id").delete(removeProduct);

module.exports = router;