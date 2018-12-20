/**
 * Created by Vieira on 2016/10/19.
 */
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<head><meta charset='utf-8'></head>");
    response.end("Hello World! from node.js \n");
    console.log("Server running at http://localhost:3000/hello world!");
}).listen(3000);
