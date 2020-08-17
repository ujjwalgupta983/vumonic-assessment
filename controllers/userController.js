'use strict'

var mongoose = require('mongoose')
var User = mongoose.model('User')
const userRegistrationService = require('../services/userRegistration')
const userAuthenticationService = require('../services/userAuthentication')

// authenticate user and provide token
exports.authenticate = function (req, res) {
  userAuthenticationService(req, res)
}

// adding a user or admin
exports.create_a_user = function (req, res) {
  userRegistrationService(req, res)
}

// read a user by Id
exports.read_a_user = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

// updating a user values
exports.update_a_user = function (req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, user) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

// logout a user or admin
exports.logout_a_user = function (req, res) {
  res.cookie('token', '')
  res.send('Logged Out')
}
