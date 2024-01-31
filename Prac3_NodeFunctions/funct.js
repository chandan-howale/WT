var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
 var c='';
 var reader1= fs.createReadStream('./textfile.txt');
 reader1.setEncoding('utf8');
 
 reader1.on('err', function(err){
 console.log(err);
 }).on('data', function(chunk){
 c+=chunk;
 }).on('end', function(){
 res.setHeader('200',{'Content-Type':'plain/text'});
 res.write(c);
 res.end();
 })
}).listen(8083);