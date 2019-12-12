var express = require('express'),
  app = express(),
  path = require('path'),
  jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./views/index.html'));
});
app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});