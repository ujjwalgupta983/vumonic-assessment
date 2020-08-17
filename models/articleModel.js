'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// properties for article
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly Enter the Topic Name'
  },
  image: {
    type: Array
  },
  content: {
    type: String
  },
  isFeatured: {
    type: Boolean
  },
  counter: {
    type: Number,
    default: 0
  },
  topicId: {
    type: Object,
    required: true
  },
  tags: {
    type: Array
  }
})

module.exports = mongoose.model('Article', ArticleSchema)
