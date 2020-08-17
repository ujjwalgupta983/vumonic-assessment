'use strict'
var authenticateToken = require('../utils/authenticateToken')
module.exports = function (app) {
  var userList = require('../controllers/userController')

  // userList Routes

  // add a user or admin
  app.route('/users')
    .post(userList.create_a_user)

  // login a user or admin
  app.route('/user/authenticate')
    .post(userList.authenticate)

  // read a user by Id or update a user
  app.route('/users/:userId')
    .get(authenticateToken, userList.read_a_user)
    .put(userList.update_a_user)

  // logout a user
  app.route('/logout')
    .get(userList.logout_a_user)
}
