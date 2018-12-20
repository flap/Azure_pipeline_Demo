/**
 * Created by zhengjin on 2016/11/4.
 */
var Q = require('q');
var fs = require('fs');

function printFileContent(fileName) {
    var defer = Q.defer();
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (!err && data) {
            console.log(data);
            defer.resolve(fileName + ' success ');
        } else {
            defer.reject(fileName + ' fail ');
        }
    });
    return defer.promise;
}

var dir = './NodeJsLessons/NodeJsLesson07/data/';
// run concurrent, stop if one rejected
Q.all([
    printFileContent(dir + 'sample01.txt'),
    printFileContent(dir + 'sample02.txt'),
    printFileContent(dir + 'sample03.txt'),
    printFileContent(dir + 'sample04.txt')])
    .then(function (success) {
        console.log(success);
    });
