const { message: { SUCCESS } } = require('../utils/constant');
const AuthModel = require('../model/auth/AuthModel');
const { encryptPassword } = require('../helper/bcrypt');

const registerUser = async (req, res, next) => {
  try {
    // Check for Schema validation of req.body before saving to DB

    // JOI Schema Validation

    const { password } = req.body;

    req.body.password = encryptPassword(password);
    console.log(req.body);

    await AuthModel.create(req.body);
    res.status(200).json({
      status: SUCCESS,
      message: 'success fully loaded',
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registerUser,
};
