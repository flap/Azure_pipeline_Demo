/**
 * Created by zhengjin on 2016/11/1.
 *
 * Using libraries superagent, cheerio
 * Refer to https://github.com/alsotang/node-lessons/tree/master/lesson5
 *
 */
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.route('/').get(function (req, res, next) {
    // send GET request
    superagent.get('https://cnodejs.org/')
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                // find element by CSS selector
                // 1) find parent element by id = 'topic_list',
                // 2) and child elements by class = 'topic_title'
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });

            res.send(items);
        })
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});
