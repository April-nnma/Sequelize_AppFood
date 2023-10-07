const dotenv = require("dotenv");
dotenv.config();

const config = {
  host: process.env.HOST,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  pass: process.env.PASS,
  port: process.env.PORT,
  dialect: process.env.DIALECT,
};

module.exports = config;
