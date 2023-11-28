const User = require("../db/model/userModel");
const { API_STATUS } = require("../utils/Constant");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(
      {
        email,
        password,
      },
      "-password"
    );
    if (!user) {
      return res.status(500).json({
        status: API_STATUS.FAILURE,
        message: `Login Error`,
      });
    }
    const users = await User.find({}, "-password");
    // const users = await User.find();
    res.json({
      status: API_STATUS.SUCCESS,
      data: user,
    });
  } catch (e) {
    res.status(403).json({
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
     return res.status(403).json({
        status: API_STATUS.FAILURE,
        message: " email has been register already ",
      });
    }

    console.log({ email, ...rest });
    const user = await User.create({ email, ...rest });
    res.json({
      status: API_STATUS.SUCCESS,
      data: user,
    });
  } catch (e) {
    console.log(`Something went worng - ${e.message}`);
    res.status(500).json({
      status: API_STATUS.FAILURE, 
      message: e.message,
    })
  }
};

module.exports = { loginUser, createUser };
