/**
 * * This module is reponsible for registration and authentication only
 * ! Don't write business logic here for registration and login functions
 *
 * ? So, I want to store the user data in the database. How should I do that?
 * ? I will create a route -> controller -> service -> repository pathway
 *
 *
 */

const express = require("express");
const authRouter = express.Router();

//* Auth Controller
const AuthController = require("../controller/AuthController");
const authController = new AuthController();

//* Registration route
authRouter.post("/registration", async (req, res) => {
  let result;
  try {
    result = await authController.registrationController(req, res);
  } catch (error) {
    console.log(`auth.js error: ${error}`);
  }
  return result;
});

//* Login route
authRouter.post("/login", async (req, res) => {
  let result;
  try {
    result = await authController.loginController(req, res);
  } catch (error) {
    console.log(`auth.js error: ${error}`);
  }
  return result;
});

module.exports = authRouter;
