const mongoose = require('mongoose');
const inventorySchema = mongoose.Schema({
    image:String,
    title:String,
    description:String,
    model_name:String,
    price:Number,
    color:String,
    mileage:Number,
    major_scratches:Number,
    original_paint:String,
    accidents:Number,
    previous_buyer:Number,      
    registration_place:String,
});
const inventoryModel = mongoose.model('MarketPlace_Inventory', inventorySchema);
module.exports =inventoryModel;