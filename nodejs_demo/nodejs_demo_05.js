/**
 * Created by zhengjin on 2016/11/3.
 *
 * Read file data refer to Node.js Tutorial.
 */
var fs = require('fs'),
    http = require('http');

// use file
// async
//fs.readFile('./data.txt', 'utf8', function (error, data) {
//    if (error) {
//        console.error(error.message);
//    }
//    console.log(data);
//});

// sync
var content = fs.readFileSync('./data.txt', 'utf8');
console.log(content);

// use stream
//var server = http.createServer(function (req, res) {
//    var stream = fs.createReadStream('data.txt');
//    stream.on('error', function (error) {
//        res.status = 500;
//        res.end(String(error));
//    });
//    stream.pipe(res);
//});
//
//server.listen(3000, function () {
//   console.log('Server is listening on port 3000.');
//});
