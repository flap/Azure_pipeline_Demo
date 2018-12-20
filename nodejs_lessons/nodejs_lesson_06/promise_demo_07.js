/**
 * Created by zhengjin on 2016/11/4.
 *
 * Promise demo 07
 */
var Q = require('q');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

var outputPromise = getInputPromise().then(function (fulfilled) {
    return fulfilled;
}).fail(function (error) {
    console.log('fail: ' + error);
});

outputPromise.then(function (fulfilled) {
    console.log('fulfilled: ' + fulfilled);
}, function (rejected) {
    console.log('rejected: ' + rejected);
});

//defer.resolve('inputpromise fulfilled');  // output: fulfilled: inputpromise fulfilled
defer.reject('inputpromise rejected');
// output: fail: inputpromise rejected
// fulfilled: undefined
