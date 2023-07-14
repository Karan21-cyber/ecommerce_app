const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    user :[{type:mongoose.Schema.Types.ObjectId , ref:"users"}],
    shopName:{type:String},
    shopType:{type:String},
    images:{type:String},
    shopDescription:{type:String},
    shopStatus:{type:String},
})

const shopModel = mongoose.model("shops",shopSchema);

module.exports = shopModel;