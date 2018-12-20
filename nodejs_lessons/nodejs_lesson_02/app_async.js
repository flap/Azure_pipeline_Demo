/**
 * Created by zhengjin on 2016/12/7.
 */
var async = require('async');

var urls = [];
for (var i = 0; i < 30; i++) {
    urls.push('http://datasource_' + i);
}

var concurrencyCount = 0;
var fetchUrl = function (url, callback) {
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log('Now the concurrency number is ' + concurrencyCount
        + ' fetch url: ' + url, ' delay time: ' + delay + 'ms');
    setTimeout(function () {
        callback(null, url + ' html content');
        concurrencyCount--;
    }, delay);
};

async.mapLimit(urls, 1, function (url, callback) {
    fetchUrl(url, callback);
}, function (err, result) {
    if (err) {
        console.error(err);
    }

    console.log('final:');
    console.log(result);
});
