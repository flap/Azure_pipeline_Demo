/**
 * Created by zhengjin on 2016/11/4.
 *
 * Demo for promise, refer to
 * https://github.com/alsotang/node-lessons/tree/master/lesson17
 *
 */
var Q = require('q');
var defer = Q.defer();

var users = [
    {'name': 'andrew', 'passwd': 'password'},
    {'name': 'zhengjin', 'passwd': 'password'}
];

function getUsername() {
    return defer.promise;
}

function getUser(username) {
    // sync
    var user = {'name': 'null', 'passwd': 'null'};
    users.forEach(function (element) {
        if (element.name === username) {
            user = element;
        }
    });

    return user;
}

getUsername().then(function (username) {
   return getUser(username);
}).then(function (user) {
    console.log(user);
});

defer.resolve('andrew');
//defer.resolve('invalid');
