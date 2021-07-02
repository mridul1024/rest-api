/**
 * * This is article model
 */

const mongoose = require("mongoose");

const articles = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

articles.pre("save", (next) => {
  console.log("Saving articles in the database");
  next();
});

articles.post("save", () => {
  console.log("Article saved");
});

module.exports = mongoose.model("articles", articles);
