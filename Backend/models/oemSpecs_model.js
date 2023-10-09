const mongoose = require('mongoose');
const oemSchema = mongoose.Schema({
    model_name:String,
    year:Number,
    listPrice:Number,
    available_colors:String,
    mileage:Number,
    bhp:Number,
    max_speed:Number
});
const oemModel = mongoose.model('OEM_Specs', oemSchema);
module.exports = oemModel;