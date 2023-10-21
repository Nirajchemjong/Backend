const express = require("express"); //importing express.
require("dotenv").config(); //importing .env file on node.
const path = require("path"); /// importing path
const authRouter = require("./routes/auth");
const app = express(); /// setting up on app.

// ++++++++++ Setting up view engine +++++++++++
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// ++++++++ End of Setting up view Engine ++++++

//////+++++++ using routes

app.use(authRouter);

// ++++++++ end of routes +++++

///////+++++++++ Importing Port from .env FIles ++++++++++++
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
// ++++++++++ Listening on the port +++++++++++++++++++++
