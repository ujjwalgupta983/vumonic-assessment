'use strict'
var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')

module.exports = function (req, res, next) {
  // adding topic with these properties
  var newTopic = new Topic({
    _Id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.file,
    userEmail: req.body.userEmail
  })

  newTopic.save(function (err, topic) {
    if (err) {
      res.send(err.message)
    }
    res.json(topic)
  })
}
