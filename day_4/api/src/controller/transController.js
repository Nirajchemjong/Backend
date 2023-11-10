const mongoose = require("mongoose");

const Transaction = require("../config/db/model/transModel");
// const transaction = require("../config/db/model/transModel");
const User = require("../config/db/model/userModel");
const { API_STATUS } = require("../utils/Constant");

const getAllTrans = async (req, res) => {
  try {
    const { authorization } = req.headers;
    // // console.log("AUth", authorization); userid
    // // Format check
    // if (!mongoose.Types.ObjectId.isValid(authorization)) {
    //   return res.json({
    //     status: API_STATUS.FAILURE,
    //     message: `Authentication failed`,
    //   });
    // }
    // const user = await User.findById(authorization);
    // if (!user) {
    //   return res.json({
    //     status: API_STATUS.FAILURE,
    //     message: `Auth Error`,
    //   });
    // }
    const filter = { userId: authorization };
    //  const user = await User.findById();
    const trans = await Transaction.find(filter);
    res.json({
      status: API_STATUS.SUCCESS,
      data: trans,
    });
  } catch (e) {
    console.log(`something is wrong - ${e.message}`);
  }
};

const createTrans = async (req, res) => {
  const { authorization } = req.headers;

  try {
    const { body } = req;
    // "type": "expense",
    // "amount": 23
    const trans = await Transaction.create({ ...body, userId: authorization });
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
    const { authorization } = req.headers;

    const { id } = req.params;
    const trans = await Transaction.findOne({ _id: id, userId: authorization });
    if (!trans) {
      return res.json({
        status: API_STATUS.FAILURE,
        message: `You dont have access to delete this transaction `,
      });
    }

    await Transaction.findByIdAndDelete(id);

    res.json({
      status: API_STATUS.SUCCESS,
    });
  } catch (e) {
    console.log(`error is ${e.message}`);
  }
};

module.exports = { getAllTrans, createTrans, deleteTrans };
