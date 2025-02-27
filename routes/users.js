var express = require("express");
const userModel = require("../Models/Usermodel");
var bcrypt=require('bcryptjs')
// var nodemail=require('nodemailer')
// var jwt=require('jsonwebtoken');
var router = express.Router();

// router.post("/signup", (req, res) => {
//   let user = new userModel({
//     name: req.body.name,
//     firstname: req.body.firstname,
//     email: req.body.email,
//     phno: req.body.phno,
//     password: req.body.password,
//   });
//   user.save()
//   .then(response=>res.status(200).json({message:response}))
//   .catch(err=>res.status(401).json({message:err}))
// });

router.post('/signup',async(req,res)=>{
    const{name,firstname,email,password,}=req.body
    const emailfound=await userModel.findOne({email})
    if(emailfound){
      return res.status(201).json({message:"E mail already registered"})
    }
    const hassedpass=await bcrypt.hash(password,10)
    const newuser=new userModel({
      name,firstname,email,password:hassedpass
    })
    newuser.save().then(res.status(200).json({message:"sign-up successfully"}))})


router.post('/login',async(req,res)=>{
    const{email,password}=req.body
    let user= await userModel.findOne({email})
    if(!user){return res.status(404).json({message:"user not found"})}
    if(!user.isVerified){return res.status(404).json({message:"user not verified"})}
    let ismatch=await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(404).json({message:"password is incorrect"})
    }
    res.status(200).json({message:"login successfully"})
})
module.exports = router;
