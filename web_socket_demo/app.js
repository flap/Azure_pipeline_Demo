/**
 * Created by zhengjin on 2017/2/28.
 *
 * A web socket demo.
 */
var fs = require('fs');
var url = require('url');
var http = require('http');
var io = require('socket.io');

var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;

    switch (path) {
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('ZJ socket demo');
            response.end();
            break;
        case '/socket.html':
            readFileDataAndSendResponse(path, response, 'html');
            break;
        case '/jquery.js':
            readFileDataAndSendResponse(path, response, 'js');
            break;
        default :
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
    }
});
server.listen(8001, function () {
    console.log('http server started at localhost:8001');
});

var listener = io.listen(server);
listener.on('connection', function (socket) {
    console.log('on socket connected');

    // send data to client
    socket.emit('message', {'message': 'message from server'});

    setInterval(function () {
        socket.emit('cur_date', {'date': new Date()});
    }, 2000);

    // receive data from client
    socket.on('client_data', function (data) {
        console.log(data.letter);
    });
});

var readFileDataAndSendResponse = function (path, response, respType) {
    var contentType = 'text/html';
    if (respType === 'js') {
        contentType = 'application/javascript';
    }

    fs.readFile(__dirname + path, function (error, data) {
        if (error) {
            console.error(error);
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
        } else {
            response.writeHead(200, {'Content-Type': contentType});
            response.write(data, 'utf8');
        }
        response.end();
    });
};

// end