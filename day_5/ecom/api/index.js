const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//Basic Middleware
app.use(cors());
app.use(express.json());

//route

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "App is live",
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`app running at http://localhost:${PORT}`);
});
