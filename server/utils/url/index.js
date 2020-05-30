require('dotenv').config();

const URL =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'http://localhost:3000';

module.exports = { URL };
