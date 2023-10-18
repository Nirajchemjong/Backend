// console.log("I am the code ");
// console.log("I am the Code2 ");

const EventEmitter = require("events");
const express = require("express");
const TodoRouter = require("./src/routes/todo");
const eventEmitter = new EventEmitter();

const app = express();
app.use(express.json()); //middleware to access from client and receiving to the server

app.get("/", (req, res) => {
  res.send("I am here");
});

app.get("/code", (req, res) => {
  res.status(201).send({
    status: "sucess",
  });
});

//sending json file
app.get("/niraj", (req, res) => {
  res.json({
    status: "success",
    description: "my name is niraj chemjong",
  });
});

//redirecting to nirajchemjong.com
app.get("/red", (req, res) => {
  res.redirect("https://nirajchemjong.com");
});

eventEmitter.emit("start");

app.use("/api/v1", TodoRouter);

app.listen(8000, (error) => {
  error
    ? console.log(error.message)
    : console.log("I am listening on port 8000");
});
eventEmitter.on("start", () => {
  console.log("i just listened to start event");
});
