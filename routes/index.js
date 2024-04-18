const { Router } = require("express");
const { RegisterController, VerifyOTP } = require("../controllers");
const localVariable = require("../middlewares/localVariable");

const routes = Router();

routes.post("/register", localVariable, RegisterController);
routes.post("/verify", VerifyOTP);
module.exports = routes;
