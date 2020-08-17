'use strict'
var multer = require('multer')
var topicList = require('../controllers/topicController')
var authenticateAdmin = require('../services/authenticateAdmin')
var authenticateToken = require('../utils/authenticateToken')
const upload = multer({ dest: 'topicUploads/' })
module.exports = function (app) {
  // Topic Routes

  // add a topic validate admin, check token, upload image
  app.route('/topics')
    .post(authenticateAdmin, authenticateToken, topicList.create_a_topic, upload.single('image'))

  // get all topics and validate token
  app.route('/topics')
    .get(authenticateToken, topicList.get_all_topics)

  // get a topic by Id and validate token
  app.route('/topics/:topicId')
    .get(authenticateToken, topicList.read_a_topic)
}
