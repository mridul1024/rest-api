/**
 * * This repository module interacts with mongo db for registration and login
 * ! Don't write business logic here
 *
 * Todo: Validate username and passsword and send the result back to service for processing
 *
 *
 *
 */

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

  login(req, res) {
    return; // Todo: send validation db query result
  }
}

module.exports = AuthenticationRepository;
