/**
 * * This is User model
 */

const mongoose = require("mongoose");

//* User schema
const users = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
      validate: {
        validator: function (value) {
          return !value.includes(" ");
        },
        message: "Don't put spaces in the username.",
      },
    },
    password: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    fullName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

users.pre("save", (next) => {
  console.log("Saving user to database....");
  next();
});

users.post("save", () => {
  console.log("User is saved to database");
});

//! Removed this function because it was causing some problem (Look into how to use it properly)
//? What is the use of "method()"? -> It lets you create your own function and use it with the mongoose schema
// users.method("log", (message) => {
//   Console.log("Logger: " + message);
// });

//* exported user model
module.exports = mongoose.model("users", users);
