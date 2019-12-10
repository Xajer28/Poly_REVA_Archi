//--------------------------Partie Serveur NodeJS  -----------------------------
var html=require('html'),
  express = require("express"),
  server = express(),
  http = require('http'),
  fs = require('fs'),
  jsdom = require('jsdom'),
  cp = require('child_process'),
  vlcCommand = require('vlc-command'),
  path = require('path');

const fetch = require('node-fetch');
const delay = require('delay');
const hostname = '127.0.0.1';
const port = 3000;

server.get('/',function(request,response){
  response.sendFile(path.resolve('./view/index.html'));
});

server.get('/radio/:id_rad',function(request,response){
  txtpath = path.join(__dirname, '/', 'radios.json'),
  fichier=fs.readFileSync(txtpath),
  objectTest=JSON.parse(fichier);
});

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});