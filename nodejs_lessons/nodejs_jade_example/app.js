/**
 * Created by zhengjin on 2017/1/20.
 *
 * Nodejs, Express and Jade sample.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.set('view engine', 'jade');
app.set('views', './views');

app.listen(3000, function () {
    console.log('Jade demo is running at port 3000.');
});

app.route('/jade').get(function (req, res) {
    res.locals.persons = [
        {name: 'test_name1', age: 22, sex: 'male'},
        {name: 'test_name2', age: 22, sex: 'female'},
        {name: 'test_name3', age: 23, sex: 'female'}
    ];

    res.render('exp1', {info: 'Test info from js src.'});
});

app.route('/jadeEx').get(function (req, res) {
    res.render('exp2');
});
