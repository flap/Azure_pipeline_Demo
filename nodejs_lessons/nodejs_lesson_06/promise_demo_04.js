/**
 * Created by zhengjin on 2016/11/4.
 *
 * Promise demo 04
 *
 */
var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

// error, cannot return the argument because readFile() is async
//var outputPromise = getInputPromise().then(function (fulfilled) {
//    var path = './NodeJsLessons/NodeJsLesson06/data.txt';
//    fs.readFile(path, 'utf8', function (err, data) {
//        console.log(data);
//        return data;
//    })
//});

var outputPromise = getInputPromise().then(function (fulfilled) {
    var myDefer = Q.defer();
    var path = './NodeJsLessons/NodeJsLesson06/data.txt';  // run from IDE
//    var path = './data.txt';  // run from command line
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(err);
        }
        if (!err && data) {
            myDefer.resolve(data);
        }
    });
    return myDefer.promise;
}, function (reject) {
    throw new Error('rejected');
});

outputPromise.then(function (fulfilled) {
    console.log('fulfilled');
    console.log(fulfilled);
}, function (rejected) {
    console.log('rejected');
    console.log(rejected);
});

defer.resolve();  // output: the content of file
//defer.reject();  // output: [Error: rejected]

console.log(__filename, 'DONE.');
