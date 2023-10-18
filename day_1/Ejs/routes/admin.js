const express = require("express");
const { checkAuth, checkSessionAuth } = require("../middleware");
const router = express.Router();

// router.use(checkAuth);

router.get("/dashboard", checkSessionAuth, (req, res) => {
  //   console.log("I am dashoar");
  res.render("dashboard");
});

module.exports = router;
