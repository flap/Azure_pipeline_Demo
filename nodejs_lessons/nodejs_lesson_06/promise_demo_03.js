/**
 * Created by zhengjin on 2016/11/4.
 *
 * Promise demo 02
 *
 */
var Q = require('q');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

var outputPromise = getInputPromise().then(function (fulfilled) {
    throw new Error('fulfilled');
}, function (rejected) {
    throw new Error('rejected');
});

outputPromise.then(function (fulfilled) {
    console.log('fulfilled: ' + fulfilled);
}, function (rejected) {
    console.log('rejected: ' + rejected);
});

//defer.reject();  // OUTPUT: rejected: Error: rejected
defer.resolve();  // OUTPUT: rejected: Error: fulfilled
