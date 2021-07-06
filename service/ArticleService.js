/**
 * * This is a service class for handling operations related to articles
 * * Write business logic here and fetch data through the repository
 * !---- Create a middle ware and check auth token before performing the following operations
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
  async getAllArticlesService(req, res) {
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

  //* Get single article
  async getArticleService(req, res) {
    let id = req.params.articleId;
    let result;
    let statusCode = "200";
    try {
      result = await articleRepository.getArticle(id);
      if (result !== null) {
        return res.status(statusCode).json({ result: result });
      } else {
        statusCode = "404";
        return res.status(statusCode).json({ result: "No article found." });
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

  //* Get recent articles
  async getRecentArticlesService(req, res) {
    let result;
    let statusCode = "200";
    try {
      result = await articleRepository.getRecentArticles();
      if (result !== null) {
        return res.status(statusCode).json({ result: result });
      } else {
        statusCode = "404";
        return res
          .status(statusCode)
          .json({ result: "There was some problem" });
      }
    } catch (error) {
      if (error) {
        console.log(`ArticleRepository.js error: ${error}`);
        statusCode = "500";
        result = error;
        return res.status(statusCode).json({ result: result });
      }
    }
  }

  //* Post article service
  async postArticleService(req, res) {
    let result;
    let article;

    //* Extract payload from token
    let tokenPayload = jwt.decode(req.body.token);

    article = new Article({
      title: req.body.title,
      author: tokenPayload.payload.fullName,
      content: req.body.content,
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
        res.status(500).json({ error: result });
      }
    }
  }

  //* Update article service
  async updateArticleService(req, res) {
    //* Update the article - (:articleId) param
    let id = req.params.articleId;
    let content = req.body.content;
    let result;
    try {
      result = await articleRepository.updateArticle(id, content);
      if (result !== null) {
        res.status(200).json({ result: result });
      } else {
        res.status(401).json({ error: "Article update failed" });
      }
    } catch (error) {
      if (error) {
        console.log(`ArticleService.js error: ${error}`);
        result = error;
        res.status(500).json({ error: result });
      }
    }
  }

  //* delete article service
  async deleteArticleService(req, res) {
    let result;
    let id = req.params.articleId;
    try {
      result = await articleRepository.deleteArticle(id);
      if (result !== null) {
        console.log(`result : ${result}`);
        res.status(200).json({ result: `${result}` });
      } else {
        res
          .status(401)
          .json({ error: "The requested article is not available" });
      }
    } catch (error) {
      if (error) {
        console.log(`ArticleService.js error: ${error}`);
        result = error;
        res.status(500).json({ error: "Article deletion failed" });
      }
    }
  }
}

module.exports = ArticleService;
