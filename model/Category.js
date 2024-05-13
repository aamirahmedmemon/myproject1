const mongoose = require('mongoose');
var mySchema = new mongoose.Schema({
    category_name:String,
    
})
const Categorymodel = mongoose.model('Category',mySchema);
module.exports = Categorymodel;