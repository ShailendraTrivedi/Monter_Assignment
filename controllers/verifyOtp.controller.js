const UserModel = require("../models");

const VerifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (parseInt(req.app.locals.otp) !== parseInt(otp)) {
      return res.status(400).json({ error: "Invalid OTP" });
    }
    req.app.locals.otp = null;
    user.isVerified = true;
    await user.save();
    res.json({ message: "User verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = VerifyOTP;
