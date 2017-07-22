const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

let port = (process.env.PORT || 5000)

app.get('/', (req, res) => res.send('hell yeah'))


http.listen(port, () => {
  console.log(`Iron Wars server running on port ${port}`)
})