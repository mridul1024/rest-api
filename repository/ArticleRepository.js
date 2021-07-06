/**
 * * This is the repository for fetching data for articles
 * ! Don't write business logic here
 *
 */

const mongoose = require("mongoose");
class ArticleRepository {
  //* Get all articles
  async getAllArticles() {
    let result;
    try {
      result = await mongoose.model("articles").find();
    } catch (error) {
      console.log(`ArticleRepository.js error: ${error}`);
      result = error;
    }
    return result;
  }

  //* Get article by id
  async getArticle(id) {
    let result;
    try {
      result = await mongoose.model("articles").findById(id);
    } catch (error) {
      if (error) {
        console.log(`ArticleRepository.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }

  //* Get recent articles
  async getRecentArticles() {
    let result;
    try {
      result = await mongoose
        .model("articles")
        .find()
        .sort({ createdAt: -1 })
        .limit(3);
    } catch (error) {
      if (error) {
        console.log(`ArticleRepository.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }

  //* Post article
  async postArticle(article) {
    let result;
    try {
      result = await article.save();
    } catch (error) {
      if (error) {
        console.log(`ArticleRepository.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }

  //* Update article
  async updateArticle(id, content) {
    let result;
    try {
      result = await mongoose.model("articles").findOneAndUpdate(
        { _id: `${id}` },
        { $set: { content: `${content}` } },
        {
          upsert: true,
          new: true,
        }
      );
    } catch (error) {
      if (error) {
        console.log(`ArticleRepository.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }

  //* Delete article
  async deleteArticle(id) {
    let result;
    try {
      result = await mongoose.model("articles").findByIdAndDelete(id);
    } catch (error) {
      if (error) {
        console.log(`ArticleRepository.js error: ${error}`);
        result = error;
      }
    }
    return result;
  }
}

module.exports = ArticleRepository;
