const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isVerified: { type: Boolean, default: false },
  otp: String,
  location: String,
  age: Number,
  workDetails: String,
});
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
