'use strict'

var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var uploadTopicService = require('../services/uploadTopic')

// create a topic
exports.create_a_topic = function (req, res) {
  console.log(req.body)
  uploadTopicService(req, res)
}

// get all topics (only Logged in user)
exports.get_all_topics = function (req, res) {
  Topic.find(function (err, topics) {
    if (err) {
      res.send(err.message)
    }
    res.json(topics)
  })
}

// get a topic (only logged in user)
exports.read_a_topic = function (req, res) {
  Topic.findById(req.params.topicId, function (err, topic) {
    if (err) {
      res.send(err)
    }
    res.json(topic)
  })
}
