const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log("server is running at " + PORT);
});
