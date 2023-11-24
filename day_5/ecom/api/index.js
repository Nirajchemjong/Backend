const express = require('express');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const dbConnect = require('./config/mangoConfig');
const userRouter = require('./router/user');
const { message: { ERROR } } = require('./utils/constant');
require('dotenv').config();

const app = express();

// Basic Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// route

app.get('/', (_req, res) => {
  res.json({
    status: 'success',
    message: 'App is live',
  });
});
// auth router
app.use('/api/v1/admin', userRouter);

// this middleware handle all the error using next

// eslint-disable-next-line no-unused-vars
app.use((e, _req, res, _next) => {
  res.status(500).json({
    status: ERROR,
    message: e.message,
  });
});

const PORT = process.env.PORT || 3002;

dbConnect.then(() => {
  console.log('Db connect successfully');
  app.listen(PORT, (error) => (error
    ? console.log('error: ', error)
    : console.log(`app running at http://localhost:${PORT}`)));
}).catch((e) => {
  console.log('Error', e);
});
