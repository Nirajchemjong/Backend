const express = require("express");
const users = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/login");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) console.log(error);
    res.redirect("/login");
  });
}); //give this url to btn

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const isUserValid = users.find(
    (item) => item.email === email && item.password === password
  );
  if (isUserValid) {
    req.session.user = isUserValid;
    // res.cookie("authenticated", true, {
    //   //adding cookie
    //   maxAge: 9000,
    // });
    res.redirect("/dashboard");
  } else {
    // error msg
    res.render("login", {
      message: "Login Error! User doesn't Exits",
      class: "alert-danger",
    });
  }
});

// =============++++++++++++++++REGISTER STARTS\\\\\\\\\\\\\\\\\

router.get("/register", (req, res) => {
  res.render("register");
});

//post from register

router.post("/register", (req, res) => {
  console.log("Form Data", req.body);

  //cheking if users already there
  const { email } = req.body;
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    //Error msg
    res.render("register", {
      message: "User already exits",
      class: "alert-danger",
    });
  } else {
    //success msg
    users.push(req.body);
    res.render("register", {
      message: "Thank you for creating Account ",
      class: "alert-success",
    });
  }
});

module.exports = router;
