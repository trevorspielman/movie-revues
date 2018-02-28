var mongoose = require('mongoose')
var connectionStr = `mongodb://trevor:test@ds038379.mlab.com:38379/movie-revues`
var connection = mongoose.connection

mongoose.connect(connectionStr)

connection.on('error', err => {
  console.log('mLab error', err)
})

connection.on('open', () => {
  console.log('mLab is up!')
})