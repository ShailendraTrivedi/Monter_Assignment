const { TEMP_EMAIL, TEMP_PASSWORD } = require("../constant");
const UserModel = require("../models");
const nodemailer = require("nodemailer");

const RegisterController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: TEMP_EMAIL,
        pass: TEMP_PASSWORD,
      },
    });
    const mailOptions = {
      from: TEMP_EMAIL,
      to: email,
      subject: "OTP for Account Verification",
      text: `Your OTP is ${otp}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        log(error.message);
        return res.status(500).json({ error: "Failed to send OTP" });
      }
      console.log("Email sent: " + info.response);
      const user = new UserModel({ email, password, otp });
      user
        .save()
        .then(() => {
          res.status(201).json({
            message: `User registered successfully. Please verify your email. OTP: ${otp}`,
          });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: "Failed to register user" });
        });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = RegisterController;
