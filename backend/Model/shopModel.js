const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
    user :[{type:mongoose.Schema.Types.ObjectId , ref:"users"}],
    shopName:{type:String},
    shopType:{type:String},
    images:{type:String},
    shop_Status:{type:String},
})

const shopModel = mongoose.model("shops",shopSchema);

module.exports = shopModel;