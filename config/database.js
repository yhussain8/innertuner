// setup connection with db via mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

// show msg on db connection
db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})