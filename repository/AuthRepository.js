/**
 * * This repository module interacts with mongo db for registration and login
 * ! Don't write business logic here
 *
 * Todo: Validate username and passsword and send the result back to service for processing
 *
 *
 *
 */

const UserModel = require("../model/UserModel");
class AuthenticationRepository {
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
    return result; // Todo: send validation db query result
  }
}

module.exports = AuthenticationRepository;
