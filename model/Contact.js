const mongoose = require('mongoose');
var mySchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    subject:String,
    message:String,
  
})
const ContactModel = mongoose.model('Contact',mySchema);
module.exports = ContactModel;