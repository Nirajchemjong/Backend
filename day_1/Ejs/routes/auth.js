const express = require("express");
// const users = require("../db");
const users = require("../../Ejs/db/models/User");
const passport = require("passport");

const router = express.Router();

const { v4: uuidv4 } = require("uuid"); //importing uuid

router.get("/", (req, res) => {
  res.redirect("/login");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  // req.session.destroy((error) => {
  //   if (error) console.log(error);
  //   res.redirect("/login");
  // });

  req.logOut((error) => {
    if (error) {
      console.log(error);
    }
    res.redirect("/");
  });
}); //give this url to btn

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const isUserValid = users.find(
//     (item) => item.email === email && item.password === password
//   );
//   if (isUserValid) {
//     req.session.user = isUserValid;
//     // res.cookie("authenticated", true, {
//     //   //adding cookie
//     //   maxAge: 9000,
//     // });
//     res.redirect("/dashboard");
//   } else {
//     // error msg
//     res.render("login", {
//       message: "Login Error! User doesn't Exits",
//       class: "alert-danger",
//     });
//   }
// });

// ========++++++++++++++++++++// using passport to login
//local comes from teh strategy package name "passport-local"
router.post(
  "/login",
  // passport.authenticate(
  //   "local",
  //   {
  //     successRedirect: "/dashboard",
  //     failureRedirect: "/login",
  //   }
  // (req, res) => {  // we don't need this part as once the successRedirect works it won't goes to this part.
  //   console.log("i'am logged in");
  // }
  (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return res.redirect("/login");
      }
      if (!user) {
        return res.render("login", { message: info.message });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.redirect("/login");
        }
        return res.redirect("/dashboard");
      });
    })(req, res, next);
  }
);

// =============++++++++++++++++REGISTER STARTS\\\\\\\\\\\\\\\\\

router.get("/register", (req, res) => {
  res.render("register");
});

//post from register

router.post("/register", async (req, res) => {
  console.log("Form Data", req.body);

  //cheking if users already there
  const { email } = req.body;
  // const existingUser = users.find((user) => user.email === email);

  const existingUser = await users.findOne({
    where: {
      email,
    },
  });
  if (existingUser) {
    //Error msg
    res.render("/register", {
      message: "User already exits",
      class: "alert-danger",
    });
  } else {
    //success msg
    // users.push({ ...req.body, id: uuidv4() });
    await users.create(req.body);

    // console.log(req.body);
    // res.render("register", {
    //   message: "Thank you for creating Account ",
    //   class: "alert-success",
    // });
    passport.authenticate("local", {
      successRedirect: "/login",
      failureRedirect: "/register",
    })(req, res);
  }
});

module.exports = router;
