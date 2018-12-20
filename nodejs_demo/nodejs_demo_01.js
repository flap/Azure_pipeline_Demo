/**
 * Created by Vieira on 2016/10/24.
 *
 * Demo refer to "learn in 3 days".
 */
var net = require('net');

var server = net.createServer((function (socket) {
    socket.end("Hello World\n");
}));

server.listen(7000, '127.0.0.1');

// this can be test by command "telnet localhost 7000"
// and the output: Hello World
