const UserModel = require("../models");

const AddInfoController = async (req, res) => {
  try {
    const { email, location, age, workDetails } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.location = location;
    user.age = age;
    user.workDetails = workDetails;

    await user.save();
    res.json({ message: "Additional information added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = AddInfoController;
