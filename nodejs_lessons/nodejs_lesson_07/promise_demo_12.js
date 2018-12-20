/**
 * Created by zhengjin on 2016/11/4.
 */
var Q = require('q');

function foo(result) {
    console.log(result);
    return result + result;
}

// method 1
//Q('Hello').then(foo).then(foo).then(foo);

// method 2
//var funcs = [foo, foo, foo];
//var result = Q('Hello');
//funcs.forEach(function (func) {
//    result = result.then(func);
//});

// method 3
var funcs = [foo, foo, foo];
funcs.reduce(function (prev, current) {
    return prev.then(current);
}, Q('Hello'));
