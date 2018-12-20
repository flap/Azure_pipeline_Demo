/**
 * Created by zhengjin on 2016/11/1.
 *
 * Test Baidu weather API by using superagent.
 */
var express = require('express');
var superagent = require('superagent');

var url = 'http://apis.baidu.com/apistore/weatherservice/recentweathers?cityid=101010100';
var apikey = '7705cca8df9fb3dbe696ce2310979a62';

var app = express();

app.route('/weather').get(function (req, res, next) {
    superagent.get(url)
        // send GET request
        .set('apikey', '7705cca8df9fb3dbe696ce2310979a62')
        // set header
        .end(function (err, content) {
            if (err) {
                return next(err);
            }
            var retContent = JSON.parse(content.text)['retData']['today'];
            res.send(retContent);
        });
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});
