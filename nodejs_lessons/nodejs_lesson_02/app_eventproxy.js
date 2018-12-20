/**
 * Created by zhengjin on 2016/11/1.
 *
 * Refer to https://github.com/alsotang/node-lessons/tree/master/lesson4
 *
 */
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl).end(function (err, res) {
    if (err) {
        return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        var href = url.resolve(cnodeUrl, $element.attr('href'));
        topicUrls.push(href);
    });

    var ep = new eventproxy();

    // listen the event 'topic_html' (defined below) for topicUrls.length times
    ep.after('topic_html', topicUrls.length, function (topics) {
        // topics = [topicUrl, res.text]
        topics = topics.map(function (topicPair) {
            var topicUrl = topicPair[0];
            var topicHtml = topicPair[1];

            if (topicHtml) {
                var $ = cheerio.load(topicHtml);
                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    comment_1st: $('.reply_content').eq(0).text().trim()
                });
            } else {
                return ({
                    title: 'not available',
                    href: topicUrl,
                    comment_1st: 'not available'
                });
            }
        });
        console.log('FINAL:');
        console.log(topics);
    });

    topicUrls.forEach(function (topicUrl) {
        superagent.get(topicUrl).end(function (err, res) {
            if (err) {
                console.error(err.status);
                var htmlContent = null;
            } else {
                console.log('fetch ' + topicUrl + ' successful');
                htmlContent = res.text;
            }
            ep.emit('topic_html', [topicUrl, htmlContent]);
        });
    });
});
