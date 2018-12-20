/**
 * Created by zhengjin on 2016/11/4.
 */
var Q = require('q');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

getInputPromise().then(function (success) {
}).progress(function (progress) {
    console.log(progress);
});

defer.notify(1);
defer.notify(2);
