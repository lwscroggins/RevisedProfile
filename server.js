'use strict';

var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));
app.get('/', function(request, response) {
  response.sendFile('./app/views/index.html', {'root': __dirname});
});

var server = http.createServer(app);

app.set('port', process.env.PORT || 6500);

server.listen(app.get('port'), function() {
  console.log('server is listening on port: ', app.get('port'));
});
