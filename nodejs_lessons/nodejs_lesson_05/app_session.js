/**
 * Created by Vieira on 2016/11/3.
 *
 * Session data is saved at server, save types:
 * 1) memory, 2) cookie-self, 3) redis, 4) database
 * Session id in cookie.
 *
 */
var express = require('express');
var session = require('express-session');

var app = express();
app.listen(3000, function () {
    console.log('NodeJs app is running at port 3000.');
});

app.use(session({
    secret: 'recommend 128 bytes random string',
    cookie: {maxAge: 60 * 1000}
}));

app.get('/session', function (req, res) {
    if (req.session.isVisit) {
        req.session.isVisit += 1;
        res.send('Welcome access ' + req.session.isVisit + ' times.');
    } else {
        req.session.isVisit = 1;
        res.send('Welcome access 1st time.');
        console.log(req.session);
    }
});
// http://localhost:3000/session
