'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// schema for adding user
var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly Enter the Name'
  },
  email: {
    type: String,
    required: 'Please Enter your Email',
    unique: true
  },
  password: {
    type: String,
    required: 'Please Enter your Password'
  },
  role: {
    type: [{
      type: String,
      enum: ['admin', 'normal']
    }],
    default: ['normal']
  }
})

module.exports = mongoose.model('User', UserSchema)
