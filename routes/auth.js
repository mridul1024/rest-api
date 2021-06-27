/**
 * * This module is reponsible for registration and authentication only
 * ! Don't write business logic here for registration and login functions
 *
 * ? So, I want to store the user data in the database. How should I do that?
 * ? I will create a route -> controller -> service -> repository pathway
 *
 */

const express = require("express");
const authRouter = express.Router();

//* Auth Controller
const AuthController = require("../controller/AuthController");
const authController = new AuthController();

//* Registration route
authRouter.post("/registration", (req, res) => {
  res.json(`${authController.registrationController(req, res)}`);
});

//* Login route
authRouter.post("/login", (req, res) => {
  res.json(`${authController.loginController(req, res)}`);
});
