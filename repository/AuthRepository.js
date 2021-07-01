/**
 * * This repository module interacts with mongo db for registration and login
 * ! Don't write business logic here
 *
 */

const UserModel = require("../model/UserModel");
class AuthenticationRepository {
  //* Registration
  async registration(newUser) {
    let result;

    try {
      result = await newUser.save();
    } catch (error) {
      console.log(`AuthRepository.js error: ${error}`);
      result = error;
    }

    return result;
  }

  //* Login
  async login(username) {
    let result;

    try {
      result = await UserModel.findOne({
        username: username,
      });
    } catch (error) {
      console.log(`AuthRepository.js error: ${error}`);
      result = error;
    }
    return result;
  }
}

module.exports = AuthenticationRepository;
