/**
 * * This module is reponsible to act as controller for registration and login
 * ! Don't write buisness logic here for registration and login
 *
 * ?For writing business logic I will use a service module
 *
 */

//* Auth Service
const AuthService = require("../service/AuthService");
const authService = new AuthService();

class AuthenticationController {
  //* Registration controller
  registrationController(req, res) {
    return authService.registationService(req, res);
  }

  //* Login controller
  loginController(req, res) {
    return authService.loginService(req, res);
  }
}

modules.export = AuthController;
