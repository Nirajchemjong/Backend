const express = require("express");

const users = express.Router();

users.get("/", (req, res) => {
  res.json({
    status: "success",
    messgare: "hello world",
  });
});

users.get("/healthy", (req, res) => {
  res.json({
    status: "success",
    message: "Healhy as Niraj boss",
  });
});

users.post("/register", (req, res) => {
  const { body } = req;

  const data = { ...body };
  console.log(data);

  res.json({
    status: "success",
    message: "hello there i am post ",
    data: data,
  });
});

users.delete("/:id", (req, res) => {
  const { id } = req.body;
  res.json({
    status: "deleted",
    message: "hello from delete",
    data: id,
  });
});

module.exports = users;
