const { Router } = require("express");
const {
  RegisterController,
  VerifyOTP,
  LoginController,
  AddInfoController,
  GetInfoController,
} = require("../controllers");
const localVariable = require("../middlewares/localVariable");
const verifyToken = require("../middlewares/verifyToken");

const routes = Router();

routes.post("/register", localVariable, RegisterController);
routes.post("/verify", VerifyOTP);
routes.post("/login", LoginController);
routes.post("/add-info", verifyToken, AddInfoController);
routes.get("/get-info", verifyToken, GetInfoController);

module.exports = routes;
