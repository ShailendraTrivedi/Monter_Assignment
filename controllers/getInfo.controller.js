const UserModel = require("../models");

const GetInfoController = async (req, res) => {
  try {
    const email = req.user;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
      email: user.email,
      location: user.location,
      age: user.age,
      workDetails: user.workDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = GetInfoController;
