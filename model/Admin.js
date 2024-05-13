const mongoose = require('mongoose');
var mySchema = new mongoose.Schema({
    admin_name:String,
    admin_email:String,
    admin_mobile:Number,
    admin_password:String,
})
const AdminModel = mongoose.model('Admin',mySchema);
module.exports = AdminModel;