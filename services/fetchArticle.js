'use strict'
var mongoose = require('mongoose')
var Article = mongoose.model('Article')
var loginStatus = require('../utils/loginStatus')

module.exports = function (req, res) {
  // check Login Status
  loginStatus(req, res)
    .then((status) => {
      // if LoggedIn then
      if (status) {
        // Fetch Featured Articles of Given Topic
        Article.find({ _id: req.params.articleId, isFeatured: true },
          function (err, article) {
            if (err) {
              res.send(err.message)
            } else {
              // Increment their count by 1
              Article.updateOne({ _id: req.params.articleId, isFeatured: true }, { $inc: { counter: 1 } }, function (err, art) {
                if (err) {
                  res.send(err.message)
                }
              })
              res.json(article)
            }
          })
      } else {
        // if not Logged In

        // Fetch Non Featured Articles of Given Topic
        Article.find({ _id: req.params.articleId, isFeatured: false },
          function (err, article) {
            if (err) {
              res.send('You are not LoggedIn to view this article')
            } else {
              // Increment Count by 1
              Article.updateOne({ _id: req.params.articleId, isFeatured: false }, { $inc: { counter: 1 } }, function (err, art) {
                if (err) {
                  res.send(err.message)
                }
              })
              res.json(article)
            }
          })
      }
    })
}
