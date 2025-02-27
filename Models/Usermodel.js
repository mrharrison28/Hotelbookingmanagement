const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  firstname: String,
  email: String,
  isVerified:{
    type:String,default:true
  },
  password: String,
});
const userModel = new mongoose.model("users", userSchema);


module.exports = userModel;
