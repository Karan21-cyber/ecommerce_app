const mongoose = require("mongoose");

const wishlistSchema  = mongoose.Schema({
    user:[{type:mongoose.Schema.Types.ObjectId , ref:"users"}],
    wishlistProduct:[{type:mongoose.Schema.Types.ObjectId , ref:"products"}],
},{
    timestamps:true,
});

const wishlistModel = mongoose.model("wishlists",wishlistSchema);

module.exports = wishlistModel;