const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  URL_ENDPOINT: process.env.REST_ENDPOINT,
  CHAVE: process.env.CHAVE
};