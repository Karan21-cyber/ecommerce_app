const express = require("express");
const { addOrder, singleOrder, userOrder ,allOrders, updateOrder} = require("../Controller/orderController");

const router = express.Router();

router.route("/addorder").post(addOrder);
router.route("/singleOrder/:id").get(singleOrder);
router.route("/userOrder/:id").get(userOrder);
router.route("/").get(allOrders);
router.route("/update").put(updateOrder);

module.exports = router;