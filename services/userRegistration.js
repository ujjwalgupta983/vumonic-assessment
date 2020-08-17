'use strict'
var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = function (req, res) {
  // add User or admin
  var newUser = new User(req.body)

  newUser.save(function (err, user) {
    if (err) {
      res.send(err.message)
    }
    if (user.role[0] === 'normal') {
      res.send('User Created Successfully')
    } else {
      res.send('Admin Created Successfully')
    }
  })
}
