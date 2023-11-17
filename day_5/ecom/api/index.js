const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const auth = require('./router/authRouter');
const { message: { ERROR } } = require('./utils/constant');
require('dotenv').config();

const app = express();

// Basic Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// route

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'App is live',
  });
});
// auth router
app.use('/api/v1/auth', auth);

app.use((e, req, res, next) => {
  res.status(500).json({
    status: ERROR,
    message: e.message,
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, (error) => (error
  ? console.log('error: ', error)
  : console.log(`app running at http://localhost:${PORT}`)));
