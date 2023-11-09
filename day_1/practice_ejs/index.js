const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();

const authRouter = require("./route/auth"); //importing router from given folder make sure it is exported and app.use is done on this router to work properly

// setting up routes path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// =========== after seting view engine to ejs and path to route we can your /views folder filename as a route path//

// +++++++++ let's make a folder of route for authentication and admin   +++

///++++++++++++++ --- Once the route is been imported then app must use it to work that URL thank++++

app.use(authRouter); //===== using authrouter to make sure auth route/auth is working properly 



const PORT = process.env.PORT || 3004;

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
app.listen(PORT, () => {
  console.log("server is running at " + PORT);
});
