//--------------------------Partie Serveur NodeJS  -----------------------------
var html=require('html'),
  express = require("express"),
  server = express(),
  http = require('http'),
  bodyParser=require('body-parser');
  RadioPort=require('./RadioPort');

const fetch = require('node-fetch');
const delay = require('delay');

const hostname = '127.0.0.1';
const port = 3000;

server.use(RadioPort);

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});