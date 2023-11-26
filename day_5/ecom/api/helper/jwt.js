/* eslint-disable import/no-extraneous-dependencies */
const jwt = require('jsonwebtoken');

const JWT_ACCESS_SECRET = '1234ja;kdjfa432akjdfh';
const JWT_REFRESH_SECRET = 'asdfjkjhasdf123424jhj';

// const createAccessJWT = () => {
//   const token = jwt.sign({
//     data: 'niraj chemjong',
//   }, 'secret', { expiresIn: 60 * 60 });
//   return token;
// };

const createAccessJWT = (userInfo) => {
  const token = jwt.sign(
    { userInfo },
    JWT_ACCESS_SECRET,
    { expiresIn: '1m' },
  );
  return token;
};

const createRefreshJWT = (userInfo) => {
  const token = jwt.sign(
    { userInfo },
    JWT_REFRESH_SECRET,
    { expiresIn: 60 * 60 },
  );
  return token;
};

module.exports = {
  createAccessJWT,
  createRefreshJWT,
};
