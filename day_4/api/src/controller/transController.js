const Transaction = require("../config/db/model/transModel");
// const transaction = require("../config/db/model/transModel");
const User = require("../config/db/model/userModel");
const { API_STATUS } = require("../utils/Constant");

const getAllTrans = async (req, res) => {
  try {
    const trans = await Transaction.find({});
    res.json({
      status: API_STATUS.SUCCESS,
      data: trans,
    });
  } catch (e) {
    console.log(`something is wrong - ${e.message}`);
  }
};

const createTrans = async (req, res) => {
  // const userID = User.findOne()

  try {
    const { body } = req;

    const trans = await Transaction.create(body);
    res.json({
      status: API_STATUS.SUCCESS,
      data: trans,
    });
  } catch (e) {
    console.log(`something went wrong ${e.message}`);
  }
};

const deleteTrans = async (req, res) => {
  try {
    const { id } = req.params;

    const trans = await Transaction.findByIdAndDelete(id);

    res.json({
      status: API_STATUS.SUCCESS,
    });
  } catch (e) {
    console.log(`error is ${e.message}`);
  }
};

module.exports = { getAllTrans, createTrans, deleteTrans };
