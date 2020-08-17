'use strict'
var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')

module.exports = function (req, res, next) {
  // check whether topic exists or not
  Topic.find({ _id: req.body.topicId }, function (err, user) {
    if (err) {
      res.sendStatus(403)
    } else {
      next()
    }
  })
}
