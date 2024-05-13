const mongoose = require('mongoose');
var mySchema = new mongoose.Schema({
    name:String,
    gender:String,
    email:String,
    mobile:Number,
    address:String,
    password:String,
    conformpassword:String,
})
const UserModel = mongoose.model('User',mySchema);
module.exports = UserModel;