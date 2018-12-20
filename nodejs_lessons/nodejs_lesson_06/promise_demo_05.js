/**
 * Created by zhengjin on 2016/11/4.
 *
 * Promise demo 05
 *
 */
var Q = require('q');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

var outputPromise = getInputPromise().then(function (fulfilled) {
    return 'fulfilled';
});

outputPromise.then(function (fulfilled) {
    console.log('fulfilled: ' + fulfilled);
}, function (rejected) {
    console.log('rejected: ' + rejected);
});

//defer.resolve();
defer.reject('inputpromise rejected');  // output: rejected: inputpromise rejected
