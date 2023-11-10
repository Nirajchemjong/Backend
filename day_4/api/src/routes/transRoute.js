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

module.exports = trans;
