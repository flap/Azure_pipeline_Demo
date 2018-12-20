/**
 * Created by zhengjin on 2016/11/4.
 *
 * Promise demo 06
 */
var Q = require('q');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

var outputPromise = getInputPromise().then(null, function (rejected) {
    return 'rejected';
});

outputPromise.then(function (fulfilled) {
    console.log('fulfilled: ' + fulfilled);
}, function (rejected) {
    console.log('rejected: ' + rejected);
});

//defer.resolve('inputpromise fulfilled');  // output: fulfilled: inputpromise fulfilled
defer.reject('inputpromise rejected');  // output: fulfilled: rejected
