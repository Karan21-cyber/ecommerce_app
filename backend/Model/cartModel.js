const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    user:[{type:mongoose.Schema.Types.ObjectId , ref:"users"}],
    cartProduct:[{type:mongoose.Schema.Types.ObjectId , ref:"products"}],
    productQuantity:{type:Number},
},{
    timestamps :true,
});

const cartModel = mongoose.model("carts", cartSchema);

module.exports = cartModel;
