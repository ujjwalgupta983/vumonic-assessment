'use strict'
var mongoose = require('mongoose')
var User = mongoose.model('User')
const jwtToken = require('../utils/jwtToken')

module.exports = function (req, res) {
  // check whether user email and password exists
  User.find({ email: req.body.email }, function (err, user) {
    if (err) {
      res.send('Invalid Email')
    }

    if (user[0].password === req.body.password) {
      jwtToken(user[0], res)
    } else {
      res.send('Invalid Password')
    }
  })
}
