const port = 3003

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCurs = require('./cors');

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());
server.use(allowCurs)

server.listen(port, function(){
    console.log(`backend is running on port ${port}     `)
})

module.exports = server;