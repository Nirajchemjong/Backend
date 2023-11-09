const User = require("../config/db/model/userModel");
const { API_STATUS } = require("../utils/Constant");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json({
      status: API_STATUS.SUCCESS,
      data: users,
    });
  } catch (e) {
    res.json({
      status: API_STATUS.FAILURE,
      message: `something worng ${e.message}`,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, ...rest } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.json({
        status: API_STATUS.FAILURE,
        message: " email has been register already ",
      });
    }

    console.log({ email, ...rest });
    const user = await users.create({ email, ...rest });
    res.json({
      status: API_STATUS.SUCCESS,
      data: user,
    });
  } catch (e) {
    console.log(`Something went worng - ${e.message}`);
  }
};

module.exports = { getAllUsers, createUser };
