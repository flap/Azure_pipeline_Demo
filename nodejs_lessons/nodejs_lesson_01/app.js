/**
 * Created by zhengjin on 2016/10/28.
 *
 * Refer to https://github.com/alsotang/node-lessons/tree/master/lesson2
 * install libraries by "npm install express utility --save"
 *
 * npm install express --registry=https://registry.npm.taobao.org
 *
 */
var express = require('express');
var utility = require('utility');

var app = express();

app.route('/').get(function (req, res) {
    var q = req.query.q;
    var md5Value = utility.md5(q);
    res.send(md5Value);
});
// access by "http://localhost:3000/?q=5"

app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
});
