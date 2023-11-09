const { Router } = require("express");
const {
  getAllTrans,
  createTrans,
  deleteTrans,
} = require("../controller/transController");

const trans = Router();

trans.get("/", getAllTrans);

trans.post("/", createTrans);

trans.delete("/:id", deleteTrans);

trans.patch("/:id", (req, res) => {
  const { id } = req.body;
  res.json({
    status: "success to update",
    id: id,
  });
});

module.exports = trans;
