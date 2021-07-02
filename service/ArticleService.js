/**
 * * This is a service class for handling operations related to articles
 *
 * !---- Create a middle ware and check auth token before performing the following operations
 * Todo: Create updateArticle() function
 * Todo: Create deleteArticle() function
 *
 * ? Write business logic here and fetch data through the repository
 *
 */

const ArticleRepository = require("../repository/ArticleRepository");
const articleRepository = new ArticleRepository();
const Article = require("../model/ArticleModel");
const jwt = require("jsonwebtoken");

//Secret key for jwt token
const secretKey =
  process.env.SECRET_KEY || "4005aa34-0e52-46b1-9cf5-5ff64466471d";

class ArticleService {
  //* Get all articles service
  async getAllArticles(req, res) {
    let result;
    let statusCode = "200";
    try {
      result = await articleRepository.getAllArticles();
      if (result !== null) {
        return res.status(statusCode).json({ result: result });
      } else {
        statusCode = "404";
        return res.status(stausCode).json({ result: "No articles available" });
      }
    } catch (error) {
      if (error) {
        console.log(`ArticleService.js error: ${error}`);
        result = error;
        statusCode = "500";
        return res.status(statusCode).json({ result: result });
      }
    }
  }

  //! Add all the remaining functions
  //* Post article service
  async postArticleService(req, res) {
    let result;
    let article;

    //Extract payload from token
    console.log(`ArticleService.js token: ${req.body.token}`);
    let payload = jwt.decode(req.body.token);
    console.log(
      `ArticleService.js fullname: ${JSON.stringify(payload.fullName)}`
    );

    article = new Article({
      title: req.body.title,
      author: payload.fullName,
      content: "Test content",
    });

    try {
      result = await articleRepository.postArticle(article);
      if (result !== null) {
        res.status(200).json({ result: result });
      } else {
        res.status(401).json({ error: "Article creation failed" });
      }
    } catch (error) {
      if (error) {
        console.log(`ArticleService.js error: ${error}`);
        result = error;
        res.status(500).json({ result: result });
      }
    }
  }

  //* Update article service
  updateArticleService(req, res) {
    res.status(200).json({ result: "update service" }); // Todo: Write the whole update function later (and convert to async)
  }

  //* delete article service
  deleteArticleService(req, res) {
    res.status(200).json({ result: "delete service" }); // Todo: Write the whole delete function later (and convert to async)
  }
}

module.exports = ArticleService;
