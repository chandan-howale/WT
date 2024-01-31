// create a node js application and use built in module as well as create own modules

var http = require('http');
var dt = require('./demo');
var pt = require('./ptrdemo');

// create own node server

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write("\n This is a Node program.");
  res.write("\n Date : " + dt.mydate());
  res.write("\n Simple Interest : " + pt.ptrCal(1000,4,8));
  res.end();
}).listen(3000);