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

//* exported user model
module.exports = mongoose.model("users", users);
