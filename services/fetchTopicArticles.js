'use strict'
var mongoose = require('mongoose')
var Article = mongoose.model('Article')
var loginStatus = require('../utils/loginStatus')

module.exports = function (req, res) {
  loginStatus(req, res)
    .then((status) => {
      // If User Logged in
      if (status) {
        // Fetch Featured Articles of Given Topic
        Article.find({ topicId: req.params.topicId, isFeatured: true },
          function (err, article) {
            if (err) {
              res.send(err.message)
            } else {
              // Increment count ny 1
              Article.updateMany({ topicId: req.params.topicId, isFeatured: true }, { $inc: { counter: 1 } }, function (err, art) {
                if (err) {
                  res.send(err.message)
                }
              })
              res.send(article)
            }
          }).sort({ title: req.query.option || 2 })
      } else {
        // If no Logged In
        // Fetch Non Featured Articles of Given Topic
        Article.find({ topicId: req.params.topicId, isFeatured: false },
          function (err, article) {
            if (err) {
              res.send(err.message)
            } else {
              // increment Count By 1
              Article.updateMany({ topicId: req.params.topicId, isFeatured: false }, { $inc: { counter: 1 } }, function (err, art) {
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
