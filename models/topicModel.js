'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// properties for topic
var TopicSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly Enter the Topic Name'
  },
  image: {
    data: Buffer,
    type: Array
  },
  userEmail: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Topic', TopicSchema)
