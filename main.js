const express = require("express");
const mongoose = require("mongoose");
const middlewares = require("./middlewares");
const { ATLAS_DATABASE_URL, APP_PORT } = require("./constant");
const routes = require("./routes");

const app = express();

app.use(middlewares);
app.use("/api", routes);

// * ------------------------------ Database and Server Connection ------------------------------

mongoose
  .connect(`${ATLAS_DATABASE_URL}/monter_assignment`)
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB");
  });
const PORT = APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
