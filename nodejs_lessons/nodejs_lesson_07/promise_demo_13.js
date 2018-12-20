/**
 * Created by zhengjin on 2016/11/4.
 */
var Q = require('q'),
    fs = require('fs');

function printFileContent(fileName) {
    return function () {
        var defer = Q.defer();
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (!err && data) {
                console.log(data);
                defer.resolve();
            }
        });
        return defer.promise;
    }
}
// return a function that return a promise

var dir = './NodeJsLessons/NodeJsLesson07/data/';
// run in sequence
printFileContent(dir + 'sample01.txt')()
    .then(printFileContent(dir + 'sample02.txt'))
    .then(printFileContent(dir + 'sample03.txt'))
    .then(printFileContent(dir + 'sample04.txt'));
