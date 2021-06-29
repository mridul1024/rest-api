/**
 * * This module is reponsible to act as a service for registration and login
 * * Write business logic here
 *
 * ? How to access the database? Simple, use a repository
 *
 * Todo: Write login function for this service module
 * Todo: Generate JWT token during login
 *
 * ! Notes
 * * Required params for user model
 * @param username -> //! required
 * @param password -> //! required
 * @param apiKey -> //! required
 * @param fullName
 * @parma email -> //! required
 *
 */

const AuthRepository = require("../repository/AuthRepository");
const authRepository = new AuthRepository();
const User = require("../model/UserModel");
const generateApiKey = require("generate-api-key");

class AuthenticationService {
  //* Registration service
  async registrationService(req, res) {
    let result;
    let statusCode = "201";

    //* User object
    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
      apiKey: generateApiKey(), //generate api key and enter here,
      fullName: req.body.fullName,
      email: req.body.email,
    });

    try {
      result = await authRepository.registration(newUser);
      result == null ? (statusCode = "500") : (statusCode = "201");
    } catch (error) {
      console.log(`AuthService.js error: ${result}`);
    }

    return res.status(statusCode).json(result);
  }

  //* Login service
  loginService(req, res) {
    return; //todo: return result after fecthing from repository
  }
}

module.exports = AuthenticationService;
