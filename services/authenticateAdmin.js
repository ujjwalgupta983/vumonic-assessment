'use strict'
var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = function (req, res, next) {
  // find a user by email provide in json
  User.find({ email: req.body.userEmail }, function (err, user) {
    if (err) {
      res.send('Invalid Email')
    }
    if (user.length > 0) {
      // if user is normal
      if (user[0].role[0] === 'normal') {
        res.sendStatus(401)
      } else {
        next()
      }
    } else {
      res.sendStatus(401)
    }
  })
}
