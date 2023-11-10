const express = require("express");
require("dotenv").config();
const dbConnect = require("./src/config/mongoDB");
const cors = require("cors");
const userRouter = require("./src/routes/userRoute");
const transRouter = require("./src/routes/transRoute");
const { authMiddleware } = require("./src/middleware/authMiddleware");
const app = express();

app.use(express.json()); //basic middleWare
app.use(cors());

app.get("/version", (req, res) => {
  res.send({ status: "Success" });
});

app.use("/api/v1/user", userRouter);

// All Private Routes
app.use("/api/v1/transaction", authMiddleware, transRouter);

const PORT = process.env.PORT || 2000;

dbConnect()
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("error" + e);
  });
