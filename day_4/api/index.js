const express = require("express");
require("dotenv").config();
const userRouter = require("./src/routes/userRoute");
const transRouter = require("./src/routes/transRoute");
const app = express();

app.use(express.json()); //basic middleWare
app.get("/", (req, res) => {
  res.send({});
});
app.use("/api/v1/user", userRouter);

app.use("/api/v1/transaction", transRouter);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
