/* eslint-disable import/no-extraneous-dependencies */
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const encryptPassword = (plainPassword) => bcrypt.hashSync(plainPassword, salt);

const comparePassword = (plainPassword, hashPassword) => bcrypt.compareSync(plainPassword, hashPassword);

module.exports = { encryptPassword, comparePassword };
