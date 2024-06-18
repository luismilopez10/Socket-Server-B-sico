const express = require('express');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT;

// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket.js');

// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(port, (error) => {
    if (error) throw new Error(error);

    console.log('Servidor corriendo en el puerto: ', port)
});