/**
 * * This module is reponsible to act as controller for registration and login
 * ! Don't write buisness logic here for registration and login
 *
 * ?For writing business logic I will use a service module
 *
 * Todo: Write login controller function
 *
 */

//* Auth Service
const { restart } = require("nodemon");
const AuthService = require("../service/AuthService");
const authService = new AuthService();

class AuthenticationController {
  //* Registration controller
  async registrationController(req, res) {
    let result;
    try {
      result = await authService.registrationService(req, res);
    } catch (error) {
      console.log(`AuthController.js error: ${error}`);
    }
    return result;
  }

  //* Login controller
  async loginController(req, res) {
    let result;
    try {
      result = await authService.loginService(req, res);
    } catch (error) {
      console.log(`AuthController.js error: ${error}`);
    }
    return result;
  }
}

module.exports = AuthenticationController;
