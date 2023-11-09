const { Router } = require("express");

const trans = Router();

trans.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "hello world",
  });
});

trans.post("/", (req, res) => {
  const { body } = req;

  const data = { ...body };

  res.json({
    status: "success",
    data: data,
  });
});

trans.delete("/:id", (req, res) => {
  const { id } = req.body;

  res.json({
    status: "successfully deleted",
    id: id,
  });
});

trans.patch("/:id", (req, res) => {
  const { id } = req.body;
  res.json({
    status: "success to update",
    id: id,
  });
});

module.exports = trans;
