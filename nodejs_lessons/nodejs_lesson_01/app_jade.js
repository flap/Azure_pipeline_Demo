/**
 * Created by zhengjin on 2016/12/5.
 */
var express = require('express');

var app = express();
app.set('view engine', 'jade');

app.route('/').get(function (req, res) {
    res.render('index', {title: 'Guru99', message: 'Welcome'});
});

app.listen(3000, function () {
    console.log('Jade demo app is running at port 3000');
});
