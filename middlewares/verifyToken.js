const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constant");
const UserModel = require("../models");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    const { email } = decoded;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user.email;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = verifyToken;
