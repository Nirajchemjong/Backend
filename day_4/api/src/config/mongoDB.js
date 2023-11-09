const mongoose = require("mongoose");

const mongoConnect = () => {
  const dbLink = process.env.DB_URL || "mongodb://127.0.0.1:27017/test";

  return mongoose.connect(dbLink);
};

module.exports = mongoConnect;
