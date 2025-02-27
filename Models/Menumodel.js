const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  price:String,
  desc:String
});
const menuModel = new mongoose.model("menu", userSchema);

module.exports = menuModel;