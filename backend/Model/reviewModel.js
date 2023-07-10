const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user:[{type:mongoose.Schema.Types.ObjectId , ref:"users"}],
    product:[{type:mongoose.Schema.Types.ObjectId , ref:"products"}],
    productReview:{type:String},
    productRating:{type:Number},
},{
    timestamps:true,
});

const reviewModel = mongoose.model("reviews", reviewSchema);

module.exports = reviewModel;