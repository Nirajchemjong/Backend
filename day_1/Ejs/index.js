const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//parsing the cookie
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); //Middleware to read form data
app.use(express.json()); // Middleware to read data from body
app.use(
  session({
    secret: "asdf1234rttt",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(authRouter);
app.use(adminRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
