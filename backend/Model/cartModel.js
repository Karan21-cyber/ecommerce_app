const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    user:[{type:mongoose.Schema.Types.ObjectId , ref:"users"}],
    cartProduct:[{type:mongoose.Schema.Types.ObjectId , ref:"products"}],
},{
    timestamps :true,
});

const cartModel = mongoose.model("carts", cartSchema);

module.exports = cartModel;
