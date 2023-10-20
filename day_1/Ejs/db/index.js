// const users = [
//   {
//     id: 1,
//     name: "niraj",
//     email: "a@a.com",
//     password: "a",
//   },
// ];

// module.exports = users;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Backend", "niraj", "Niraj12", {
  host: "127.0.0.1",
  dialect: "mysql",
});

//it will update DB table for any changes;
sequelize.sync({ alter: true }).then(() => {
  console.log("Database and Table Created !! Happy ");
});
module.exports = sequelize;
