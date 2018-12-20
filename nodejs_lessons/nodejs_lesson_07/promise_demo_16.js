/**
 * Created by zhengjin on 2016/11/4.
 */
var Q = require('q');

function getPromise(msg, timeout, opt) {
    var defer = Q.defer();
    setTimeout(function () {
        console.log((msg));
        if (opt) {
            defer.reject();
        } else {
            defer.resolve();
        }
    }, timeout);
    return defer.promise;
}

var isDone = true;
if (isDone) {
    // run stop and throw error (un-handler rejected)
    getPromise('1', 1000)
        .then(function () {
            return getPromise('2', 2000, 'opt')
        })
        .then(function () {
            return getPromise('3', 3000)
        })
        .done();
} else {
    // run stop
    getPromise('1', 1000)
        .then(function () {
            return getPromise('2', 2000, 'opt')
        })
        .then(function () {
            return getPromise('3', 3000)
        });
}
