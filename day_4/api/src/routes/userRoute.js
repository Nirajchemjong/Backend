const express = require("express");
const userController = require("../controller/userController");
const users = express.Router();

// Create a User
users.post("/", userController.createUser);

// Login a User
users.post("/login", userController.loginUser);

module.exports = users;
