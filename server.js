'use strict'
require('dotenv').config()
const express = require('express')

var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
require('./models/userModel')
require('./models/topicModel')
require('./models/articleModel')
const app = express()

const port = process.env.PORT

mongoose.connect(process.env.CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
var bodyParser = require('body-parser')
var multer = require('multer')
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(multer({ dest: 'topicUploads/' }).single('image'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

var routes = require('./routes/userRoutes.js')
routes(app)
var topicRoutes = require('./routes/topicRoutes')
topicRoutes(app)
var articleRoutes = require('./routes/articleRoutes')
articleRoutes(app)

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.listen(port, () => console.log(`Listening on port ${port}...`))
