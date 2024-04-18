const bodyParser = require("body-parser");
const { Router } = require("express");

const middlewares = Router();

middlewares.use(bodyParser.json());

module.exports = middlewares;
