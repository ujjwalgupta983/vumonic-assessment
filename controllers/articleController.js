'use strict'

var mongoose = require('mongoose')
var Article = mongoose.model('Article')
var uploadArticleService = require('../services/uploadArticle')
var fetchTopicArticles = require('../services/fetchTopicArticles')
var fetchArticleService = require('../services/fetchArticle')
var binaryTreeService = require('../services/binaryTree')

// add an article
exports.create_an_article = function (req, res) {
  uploadArticleService(req, res)
}

// update an article
exports.update_an_article = function (req, res) {
  Article.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, function (err, user) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

// fetch all articles by Topic
exports.get_topic_articles = function (req, res) {
  fetchTopicArticles(req, res)
}

// fetch an article
exports.fetch_an_article = function (req, res) {
  fetchArticleService(req, res)
}

// binary Tree representation of articles by count in either in-order, pre-order, or post-order
exports.get_binaryTree = function (req, res) {
  var dict = {}
  Article.find({}, function (err, article) {
    if (err) {
      console.log(err)
    } else {
      article.forEach(element => {
        dict[element._id] = { count: element.counter, title: element.title }
      })
      var result = binaryTreeService(dict, req.query.option)
      res.send(result)
    }
  })
}

// delete an article
exports.delete_an_article = function (req, res) {
  Article.findByIdAndDelete({ _id: req.params.articleId }, function (err, msg) {
    if (err) {
      res.send(err.message)
    } else {
      res.send('Article Deleted')
    }
  })
}
