const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
require("dotenv").config();

//Connect to DB
require("../Ejs/db/index");
const User = require("./db/models/User");

// const users = require("./db");

//initializing passport

const passport = require("passport");
const { Strategy } = require("passport-local");
const { error } = require("console");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//parsing the cookie
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); //Middleware to read form data
app.use(express.json()); // Middleware to read data from body

//This is a way to allow express to manage session
//session is saved in browser and server as well
//In this case, in server , session detail is saved in memory

app.use(
  session({
    secret: "asdf1234rttt",
    resave: false,
    saveUninitialized: true,
  })
);

//Passport Middlewares
app.use(passport.initialize()); //initializing passport
app.use(passport.session()); //initializing session

//Define the strategy
passport.use(
  //done (error, auth true/false, optional message)
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      // const user = users.find(
      //   (user) => user.email === email && user.password === password
      // );

      // using DB ============

      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return done(null, false, { message: "user not found" });
      }

      //check password from Db

      if (user.password !== password) {
        return done(null, false, { message: "invalid login" });
      }
      return done(null, user);
    } catch (e) {
      console.log(e);
      return done("something is wrong");
    }
  })
);

// how to serialize and deserialize the user from session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//how to deserializing the user from session
passport.deserializeUser(async (id, done) => {
  // const user = users.find((user) => user.id == id);\
  // checking from DB
  try {
    const user = await User.findByPk(id);
    if (!user) throw new error("user not found");
    done(null, user);
  } catch (error) {
    console.log("error", error);
  }
});

app.use(authRouter);
app.use(adminRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
