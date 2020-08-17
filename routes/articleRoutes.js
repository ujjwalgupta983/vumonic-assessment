'use strict'
var multer = require('multer')
var articleList = require('../controllers/articleController')
var authenticateAdmin = require('../services/authenticateAdmin')
var authenticateToken = require('../utils/authenticateToken')
var validateTopic = require('../utils/validateTopic')
const upload = multer({ dest: 'topicUploads/' })
module.exports = function (app) {
  // Topic Routes

  // Create an article
  app.route('/articles')
    .post(validateTopic, authenticateAdmin, authenticateToken, articleList.create_an_article, upload.single('image'))

  // Get article by Topics
  app.route('/articles/topic/:topicId?')
    .get(articleList.get_topic_articles)

  // Get article By Id
  app.route('/articles/:articleId')
    .get(articleList.fetch_an_article)

  // update an article
  app.route('/articles/:articleId')
    .put(authenticateAdmin, authenticateToken, articleList.update_an_article)

  // Get Binary Tree representation
  app.route('/article/binary?')
    .get(articleList.get_binaryTree)

  // delete an article
  app.route('/article/:articleId')
    .delete(articleList.delete_an_article)
}
