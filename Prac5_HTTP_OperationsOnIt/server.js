var http = require('http');  
var fs = require('fs');

    http.createServer(function(req, res){
        fs.readFile('demo.txt', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('\n HTTP Server is created.....');
        res.write(data);
        return res.end();
    });
}).listen(8080);