const joi = require('joi');

const { message: { ERROR } } = require('../utils/constant');

const adminRegistrationValidation = (req, res, next) => {
  try {
    console.log('Test it');
    // If req.body is valid then next if not throw error
    // JOI Schema difinition

    const schema = joi.object({
      fName: joi.string().min(3).max(20).required(),
      lName: joi.string().min(3).max(20).required(),
      phone: joi.number().required(),
      email: joi.string().email().required(),
      address: joi.string().min(3).max(100),
      password: joi.string()
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
        .message('Password must be at least 6 characters long and contain at least one uppercase letter, one digit, and one special character.'),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.json({
        status: ERROR,
        message: error.message,
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
    // console.log('error', error);
  }
};

module.exports = {
  adminRegistrationValidation,
};
