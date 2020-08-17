'use strict'
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = function (req, res) {
  const username = req.name
  const user = { name: username }

  // Generate a token
  const accessToken = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRY })
  // store token in cookies
  res.cookie('token', accessToken)
  res.send({ accessToken: accessToken })
}
