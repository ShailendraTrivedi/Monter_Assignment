const { Router } = require("express");
const {
  RegisterController,
  VerifyOTP,
  LoginController,
} = require("../controllers");
const localVariable = require("../middlewares/localVariable");

const routes = Router();

routes.post("/register", localVariable, RegisterController);
routes.post("/verify", VerifyOTP);
routes.post("/login", LoginController);
module.exports = routes;
