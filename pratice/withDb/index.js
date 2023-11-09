const express = require("express");
const routeTask = require("./route/testRouter");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/", routeTask);
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log("server is running at " + PORT);
});
