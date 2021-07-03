/**
 * * This is controller for managing articles
 * ! Don't write business logic here, create a new service controller and use it instead for processing
 *
 */

const ArticleService = require("../service/ArticleService");
const articleService = new ArticleService();

class ArticleController {
  //* Get all articles controller
  async getAllArticlesController(req, res) {
    let result;
    try {
      result = await articleService.getAllArticlesService(req, res);
    } catch (error) {
      if (error) {
        console.log(`ArticleController.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }

  //* Post article controller
  async postArticleController(req, res) {
    let result;
    try {
      result = await articleService.postArticleService(req, res);
    } catch (error) {
      if (error) {
        console.log(`ArticleController.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }

  //* Update article controller
  async updateArticleController(req, res) {
    let result;
    try {
      result = await articleService.updateArticleService(req, res);
    } catch (error) {
      if (error) {
        console.log(`ArticleController.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }

  //* Delete article controller
  async deleteArticleController(req, res) {
    let result;
    try {
      result = await articleService.deleteArticleService(req, res);
    } catch (error) {
      if (error) {
        console.log(`ArticleController.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }
}

module.exports = ArticleController;
