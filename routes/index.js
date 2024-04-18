const { Router } = require("express");
const { RegisterController } = require("../controllers");

const routes = Router();

routes.post("/register", RegisterController);
module.exports = routes;
