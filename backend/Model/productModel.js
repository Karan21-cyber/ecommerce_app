const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String },
  category: { type: String },
  shop: [{type:mongoose.Schema.Types.ObjectId, ref:"shops"}],
  discount: { type: Number },
  offer: { type: Number },
  description: { type: String },
  quantity: { type: String },
  productPrice: { type: Number },
  images: { type: Array },
  productStatus: { type: String },
  colors: { type: Array },
  type: { type: String },
  mall: { type: Boolean },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
