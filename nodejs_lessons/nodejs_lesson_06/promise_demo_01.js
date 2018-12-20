/**
 * Created by zhengjin on 2016/11/4.
 *
 * Demo for promise, refer to
 * https://github.com/alsotang/node-lessons/tree/master/lesson17
 *
 */
var Q = require('q');
var defer = Q.defer();

function getInitialPromise() {
    return defer.promise;
}

getInitialPromise().then(function (success) {
    console.log(success);
}, function (error) {
    console.log(error);
}, function (progress) {
    console.log(progress);
});

defer.notify('in progress');
defer.resolve('resolve');
// no output, just change promise status once
defer.reject('reject');
