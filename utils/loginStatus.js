'use strict'
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = async function loginStatus (req, res) {
  // checking token is null or not
  const token = req.cookies.token || ''
  try {
    if (!token) {
      return false
    }
    // verifying token
    const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = {
      name: decrypt.username
    }
    return true
  } catch (err) {
    return false
  }
}
