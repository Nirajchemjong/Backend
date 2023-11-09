const express = require("express");
const { checkAuth, checkSessionAuth } = require("../middleware");
const router = express.Router();

// router.use(checkAuth);

router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
});
router.get("/dashboard", (req, res) => {
  //   console.log("I am dashoar");
  //if you are  directly calling from api then only use req.body.
  const { user } = req;
  res.render("dashboard", {
    name: `New Dashboard - Welcome ${user.name}`,
  });
});

module.exports = router;
