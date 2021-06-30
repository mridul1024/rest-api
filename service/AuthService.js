/**
 * * This module is reponsible to act as a service for registration and login
 * * Write business logic here
 *
 * ? How to access the database? Simple, use a repository
 *
 * Todo: Generate JWT token during login //!!------ START FROM HERE ------!!//
 * Todo: Pring JWT token after successful login
 *
 * ! Notes
 * * Required params for user model
 * @param username -> //! required
 * @param password -> //! required
 * @param email -> //! required
 * @param viewApiKey -> //! required
 * @param masterApiKey -> //! required
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
          viewApiKey: generateApiKey(), //* generate api key and enter here,
          masterApiKey: generateApiKey(),
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
  async loginService(req, res) {
    //Check record with username
    let result;
    try {
      result = await authRepository.login(req.body.username);
      if (result !== null) {
        //* Compare with hashed password
        bcrypt.compare(
          req.body.password,
          result.password,
          (err, comparisonResult) => {
            if (err) {
              console.log(`AuthService.js error: ${err}`);
              return res.status(400).json({ error });
            } else {
              comparisonResult
                ? res.status(201).json({ message: "Successful login" })
                : res.status(201).json({ message: "Wrong credentials" });
            }
          }
        );
      } else {
        res.status(400).json({ message: "Wrong credentials" });
      }
    } catch (error) {
      console.log(`AuthService.js error: ${error}`);
      res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = AuthenticationService;
