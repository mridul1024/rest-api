/**
 * * This is User model
 */

const { Mongoose } = require("mongoose");

//* User schema
const user = new Mongoose.Schema(
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

user.pre("save", (next) => {
  this.log("Saving user to database....");
  next();
});

user.post("save", () => {
  this.log("User is saved to database");
});

//? What is the use of "method()"? -> It lets you create your own function and use it with the mongoose schema
user.method("log", (message) => {
  Console.log("Logger: " + message);
});

//* exported user model
module.exports = mongoose.model("User", user);
