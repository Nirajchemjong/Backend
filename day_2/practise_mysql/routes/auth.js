const express = require("express");

const router = express();

router.get("/", (req, res) => {
  res.redirect("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});







module.exports = router;
