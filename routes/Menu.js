var express = require("express");
const menuModel = require("../Models/Menumodel");
var router = express.Router();

router.get("/menu", (req, res) => {

  menuModel.find()
  .then(response=>res.status(200).json({message:response}))
  .catch(err=>res.status(401).json({message:err}))
});

router.post("/menu", (req, res) => {
  let menu = new menuModel({
    name: req.body.name,
    price:req.body.price,
    desc:req.body.desc
  });
  menu.save()
  .then(response=>res.status(200).json({message:response}))
  .catch(err=>res.status(401).json({message:err}))
});

module.exports = router;
