/**
 * Created by zhengjin on 2016/11/3.
 *
 * 1. Server send cookie to browser (set-cookie, key = value).
 * 2. Cookie is saved in browser.
 * 3. Each time browser send the request, cookie is included.
 *
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.listen(3000, function () {
    console.log('NodeJs app is running at port 3000.');
});

app.use(cookieParser());

app.route('/cookie').get(function (req, res) {
    if (req.cookies.isVisit) {
        // get value from cookie
        console.log('is visit -> ' + req.cookies.isVisit);
        var counts = parseInt(req.cookies['visitCount']) + 1;
        res.cookie('visitCount', counts, {maxAge: 60 * 1000});
        res.send('Welcome to access ' + counts + ' times.');
    } else {
        // set expired time to 60 seconds
        res.cookie('isVisit', 'true', {maxAge: 60 * 1000});
        res.cookie('visitCount', 1, {maxAge: 60 * 1000});
        res.send('Welcome to access first time.');
    }
});

// http://localhost:3000/cookie
