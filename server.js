// imports for server
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const app = express()

// middleware setup
app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// imports for db connection
require('dotenv').config()
require('./config/database.js')

// api routes
app.use('/api/users', require('./routes/api/users.js'))
app.use('/api/userInputs', require('./routes/api/userInputs.js'))

// catch-all route
app.get('/*', function(req, res) {res.sendFile(path.join(__dirname, 'build', 'index.html'))})

// set server-side port to 3001 and show msg on start
const port = process.env.PORT || 3001
app.listen(port, function() {console.log(`Express app running on port ${port}`)})