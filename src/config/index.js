require("dotenv").config();

const properties = {
  PORT: process.env.PORT || 4001,
  MONGO_URL: process.env.MONGO_URL,
};

module.exports = properties;
