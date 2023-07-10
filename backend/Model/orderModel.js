const mongoose = require("mongoose");

const orderSchema =new mongoose.Schema(
  {
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    orderProducts: { type: Array },
    orderStatus: { type: String },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
