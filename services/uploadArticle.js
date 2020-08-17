'use strict'
var mongoose = require('mongoose')
var Article = mongoose.model('Article')

module.exports = function (req, res, next) {
  // add Article with this properties
  var newArticle = new Article({
    _Id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    image: req.file,
    content: req.body.content,
    isFeatured: req.body.isFeatured,
    topicId: req.body.topicId
  })

  newArticle.save(function (err, article) {
    if (err) {
      res.send(err.message)
    }
    res.json(article)
  })
}
