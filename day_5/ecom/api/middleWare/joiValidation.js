const joi = require('joi');

const { message: { ERROR } } = require('../utils/constant');

const adminRegistrationValidation = (req, res, next) => {
  try {
    // console.log('Test it');
    // If req.body is valid then next if not throw error
    // JOI Schema difinition

    const schema = joi.object({
      fName: joi.string().min(3).max(20).required(),
      lName: joi.string().min(3).max(20).required(),
      phone: joi.number().required(),
      email: joi.string().email().required(),
      address: joi.string().min(3).max(100),
      password: joi.string().required()
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
        .message('Password must be at least 6 characters long and contain at least one uppercase letter, one digit, and one special character.'),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).json({
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

const adminVerificationValidation = (req, res, next) => {
  try {
    const schema = joi.object({

      e: joi.string().required(),
      c: joi.string().required(),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(402).json({
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

const loginUserValidation = (req, res, next) => {
  try {
    const schema = joi.object({

      email: joi.string().email().required(),
      password: joi.string().required()
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
        .message('Password must be at least 6 characters long and contain at least one uppercase letter, one digit, and one special character.'),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(402).json({
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
  adminVerificationValidation,
  loginUserValidation,
};
