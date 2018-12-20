/**
 * Created by Vieira on 2016/10/24.
 */
var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.route('/').get(function (request, response) {
    response.send('Welcome To Tutorial');
});

app.route('/node').get(function (request, response) {
    response.send('Tutorial On Node');
});

app.route('/angular').get(function (request, response) {
    response.send('Tutorial on Angular');
});

app.listen(3000, function () {

});

// need to config package.json before run express demo
