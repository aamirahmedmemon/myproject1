var express = require('express');
const AdminModel = require('../model/Admin');
const UserModel = require('../model/User');
const ContactModel = require('../model/Contact');
const Categorymodel = require('../model/Category');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//admin router
router.get('/index', function(req, res, next) {
  res.render('admin/index');
});
router.get('/form', function(req, res, next) {
  res.render('admin/form');
});
router.get('/display', function(req, res, next) {
  res.render('admin/display');
});
router.get('/login', function(req, res, next) {
  res.render('admin/login');
});
router.get('/forgotpassword', function(req, res, next) {
  res.render('admin/forgotpassword');
});
router.get('/changepassword', function(req, res, next) {
  res.render('admin/changepassword');
});
router.get('/add', function(req, res, next) {
  res.render('admin/add');
});
router.get('/update', function(req, res, next) {
  res.render('admin/update');
});
router.get('/delete', function(req, res, next) {
  res.render('admin/delete');
});
router.get('/signup', function(req, res, next) {
  res.render('admin/signup');
});
// dashboard table route start
//Admin table route start
router.get('/Adminform', function(req, res, next) {
  res.render('admin/Adminform');
});
router.get('/Categoryform', function(req, res, next) {
  res.render('admin/Categoryform');
});
/*router.get('/Admindisplay', function(req, res, next) {
  res.render('admin/Admindisplay');
});*/
/*router.get('/userdisplay', function(req, res, next) {
  res.render('admin/userdisplay');
});*/
/*router.get('/contactdisplay', function(req, res, next) {
  res.render('admin/contactdisplay');
});*/
/*router.get('/categorydisplay', function(req, res, next) {
  res.render('admin/categorydisplay');
});*/
router.post('/adminprocess', function(req, res, next) {
  var mydata = {
    admin_name: req.body.name,
    admin_email: req.body.email,
    admin_mobile: req.body.mobile,
    admin_password: req.body.password,
  }
  AdminModel.create(mydata)
  .then(() => console.log("Recorded added"))
  .catch((err) => console.log(err));
  res.redirect('Admindisplay')
 // res.send("recorded addded");
});
//Admin table dispaly route end
router.get('/Admindisplay', function(req,res,next){
  AdminModel.find()
  .then(data =>{
    console.log(data);
    res.render('admin/Admindisplay',{mydata:data});
  })
  .catch(err =>console.log(err))
});
//Admin table dispaly route end
//User table dispaly route start
router.get('/userdisplay', function(req,res,next){
  UserModel.find()
  .then(data =>{
    console.log(data);
    res.render('admin/userdisplay',{mydata:data});
  })
  .catch(err =>console.log(err))
});
//User table dispaly route End
//category table form start
router.post('/categoryprocess', function(req, res, next) {
  var mydata = {
    category_name: req.body.name,
  
  }
  Categorymodel.create(mydata)
  .then(() => console.log("Recorded added"))
  .catch((err) => console.log(err));
  res.redirect('categorydispaly')
 // res.send("recorded addded");
});
//category table form end
//category table dispaly route start
router.get('/categorydisplay', function(req,res,next){
  Categorymodel.find()
  .then(data =>{
    console.log(data);
    res.render('admin/categorydisplay',{mydata:data});
  })
  .catch(err =>console.log(err))
});
//
//Contact table dispaly route end
router.get('/contactdisplay', function(req,res,next){
  ContactModel.find()
  .then(data =>{
    console.log(data);
    res.render('admin/contactdisplay',{mydata:data});
  })
  .catch(err =>console.log(err))
});
//Contact table dispaly route End
// dashboard table route end
// user Router
router.get('/home', function(req, res, next) {
  res.render('user/home');
});
router.get('/contact', function(req, res, next) {
  res.render('user/contact');
});
router.get('/aboutus', function(req, res, next) {
  res.render('user/aboutus');
});
router.get('/login1', function(req, res, next) {
  res.render('user/login1');
});
router.get('/register', function(req, res, next) {
  res.render('user/register');
});
//user data start
router.post('/userprocess', function(req, res, next) {
  var mydata = {
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    mobile: req.body.mobile, 
    address: req.body.address, 
    password: req.body.password,
    conformpassword: req.body.conformpassword,
    
  }
  UserModel.create(mydata)
  .then(() =>console.log("Recorded added"))
  .catch((err)=>console.log(err));
  res.redirect("login1")
  //res.send("recorded addedd");
  
});
//user data end
//conatct data start
router.post('/contactprocess', function(req, res, next) {
  var mydata = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile, 
    subject: req.body.subject, 
    message:req.body.message,
  }
 

 ContactModel.create(mydata)
  .then(() =>console.log("Recorded added"))
  .catch((err)=>console.log(err));
  res.redirect("contact")
  //res.send("recorded addedd");
  
});
//contact data end

module.exports = router;
