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
 * @param email -> //! required
 * @param apiKey -> //! required
 * @param fullName
 *
 */

const AuthRepository = require("../repository/AuthRepository");
const authRepository = new AuthRepository();
const User = require("../model/UserModel");
const generateApiKey = require("generate-api-key");
const bcrypt = require("bcrypt");
const { restart } = require("nodemon");

//* Bcrypt hash rounds
const saltRounds = 10;

class AuthenticationService {
  //* Registration service
  async registrationService(req, res) {
    let result;
    let statusCode = "201";
    let newUser;

    //* Hashing password
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(`Hash error: ${err}`);
        result = err;
        statusCode = "500";
        return res.status(statusCode).json(result);
      } else {
        //* User object
        newUser = new User({
          username: req.body.username,
          password: hash,
          apiKey: generateApiKey(), //* generate api key and enter here,
          fullName: req.body.fullName,
          email: req.body.email,
        });

        try {
          result = await authRepository.registration(newUser);
          result == null ? (statusCode = "500") : (statusCode = "201");
          res.status(statusCode).json(result);
        } catch (error) {
          console.log(`AuthService.js error: ${result}`);
          result = error;
          statusCode = "500";
          res.status(statusCode).json(result);
        }
      }
    });
  }

  //* Login service
  loginService(req, res) {
    return; //todo: return result after fecthing from repository
  }
}

module.exports = AuthenticationService;
