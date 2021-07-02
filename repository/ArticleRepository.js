/**
 * * This is the repository for fetching data for articles
 * ! Don't write business logic here
 *
 * Todo: Create getAllArticles() function
 * Todo: Create updateArticle() function
 * Todo: Create deleteArticle() function
 *
 */

class ArticleRepository {
  //!Write all the other functions

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
}

module.exports = ArticleRepository;
