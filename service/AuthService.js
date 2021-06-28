/**
 * * This module is reponsible to act as a service for registration and login
 * * Write business logic here
 *
 * ? How to access the database? Simple, use a repository
 *
 * Todo: Write registration and login functions for this service
 * Todo: Create an AuthRepository object and use it to get required details from database
 */

const AuthRepository = require("../repository/AuthRepository");
const authRepository = new AuthRepository();

class AuthenticationService {
  //* Registration service
  registrationService(req, res) {
    //Create a variable for storing repository result
    result = authRepository.registration(req, res);
    //!! START HERE
    return; //todo: return result after fetching from repository
  }

  //* Login service
  loginService(req, res) {
    return; //todo: return result after fecthing from repository
  }
}

module.export = AuthenticationService;
