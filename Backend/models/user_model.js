const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    usernname:String,
    email:String,
    password:String,
    role:{type:String,enum:["dealer", "buyer"],default:"buyer"}
});
const userModel = mongoose.model('user', userSchema);
module.exports =userModel;