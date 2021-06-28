/**
 * * This repository module interacts with mongo db for registration and login
 * ! Don't write business logic here
 *
 * Todo: Create a model for user and declare it here
 * Todo: Insert a user and send the result back to service for processing
 * Todo: Validate username and passsword and send the result back to service for processing
 *
 * ! Notes
 * * Required params for user model
 * @param username -> //! required
 * @param password -> //! required
 * @param apiKey -> //! required
 * @param fullName
 * @parma email -> //! required
 *
 *
 */

const User = require("../model/UserModel");

class AuthenticationRepository {
  async registration(req, res) {
    //* variable for storing query result and status code
    let result;
    let status = 200;

    //* New user object
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      apiKey: req.body.apiKey,
      fullName: req.body.fullName,
      email: req.body.email,
    });

    //Save user
    try {
      result = await newUser.save();
      result == null ? (status = 500) : (status = 201);
    } catch (error) {
      result = error;
      status = 500;
    }

    return res.status(status).json({
      response: result,
    });
  }

  login(req, res) {
    return; // Todo: send validation db query result
  }
}
