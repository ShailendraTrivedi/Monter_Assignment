const dotenv = require("dotenv");
dotenv.config();
const {
  APP_PORT,
  DATABASE_URL,
  SECRET_KEY,
  ATLAS_DATABASE_URL,
  TEMP_EMAIL,
  TEMP_PASSWORD,
} = process.env;

module.exports = {
  APP_PORT,
  DATABASE_URL,
  SECRET_KEY,
  ATLAS_DATABASE_URL,
  TEMP_EMAIL,
  TEMP_PASSWORD,
};
