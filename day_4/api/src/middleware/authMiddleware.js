const mongoose = require("mongoose");
const { API_STATUS } = require("../utils/Constant");
const User = require("../config/db/model/userModel");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!mongoose.Types.ObjectId.isValid(authorization)) {
    return res.json({
      status: API_STATUS.FAILURE,
      message: `Authentication failed`,
    });
  }
  const user = await User.findById(authorization);
  if (!user) {
    return res.json({
      status: API_STATUS.FAILURE,
      message: `Auth Error`,
    });
  }
  next();
};

module.exports = {
  authMiddleware,
};
