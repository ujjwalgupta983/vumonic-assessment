'use strict'
require('dotenv').config()
var jwt = require('jsonwebtoken')

module.exports = function authenticationToken (req, res, next) {
  // check whether user is logged in or not
  if (req.cookies.token === '') {
    res.send('Not Logged In')
  } else {
    // Gather the jwt access token from the request header
    const auth = 'authorization'
    const authHeader = req.headers[auth]
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.send(err.message)
      req.user = user
      next()
    })
  }
}
