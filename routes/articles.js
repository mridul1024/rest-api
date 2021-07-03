/**
 * * Articles router
 * * You can add middleware verfication functions here
 * ! Don't write business logic here
 *
 * !---- Don't forget to check token for the post routes (Token check will be performed in the service)
 * !---- No need for token check for getting all articles
 *
 */

const express = require("express");
const articleRouter = express.Router();
const ArticleController = require("../controller/ArticleController");
const articleController = new ArticleController();
const jwt = require("jsonwebtoken");

//* Secret key for auth token verfication
const secretKey =
  process.env.SECRET_KEY || "4005aa34-0e52-46b1-9cf5-5ff64466471d";

//! Get routes
//* Get all articles
articleRouter.get("/all-articles", async (req, res) => {
  let result;
  try {
    result = await articleController.getAllArticlesController(req, res);
  } catch (error) {
    if (error) {
      console.log(`articles.js error: ${error}`);
      result = error;
    }
  }
  return result;
});

//! Post routes
//* Post article
articleRouter.get("/post-article", authCheck, async (req, res) => {
  let result;
  try {
    result = await articleController.postArticleController(req, res);
  } catch (error) {
    if (error) {
      console.log(`articles.js error: ${error}`);
      result = error;
    }
  }
  return result;
});

//* Delete article
articleRouter.post(
  "/delete-article/:articleId",
  authCheck,
  async (req, res) => {
    let result;
    try {
      result = await articleController.deleteArticleController(req, res);
    } catch (error) {
      if (error) {
        console.log(`articles.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }
);

//* Update article
articleRouter.post(
  "/update-article/:articleId",
  authCheck,
  async (req, res) => {
    let result;
    try {
      result = await articleController.updateArticleController(req, res);
    } catch (error) {
      if (error) {
        console.log(`articles.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }
);

//* Middleware function to verify auth token
function authCheck(req, res, next) {
  let user;
  var verifiedToken = jwt.verify(req.body.token, secretKey);
  if (typeof verifiedToken !== "undefined") {
    user = jwt.decode(req.body.token);
    res.user = user;
    next();
  } else {
    res.send(400).json({ token: "Invalid", status: "Unauthorized" });
  }
}

//* Exported articleRouter
module.exports = articleRouter;
