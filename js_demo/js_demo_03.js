/**
 * Created by zhengjin on 2016/11/14.
 */

// demo 01, promise
var isDemo01Run = false;
if (isDemo01Run) {
    (function demo01() {
        function test(resolve, reject) {
            var timeOut = Math.random() * 2;
            console.log('set timeout to: ' + timeOut + ' seconds.');

            setTimeout(function () {
                if (timeOut < 1) {
                    console.log('call resolve()...');
                    resolve('200 OK');
                } else {
                    console.log('call reject()...');
                    reject('timeout in ' + timeOut + ' seconds.');
                }
            }, timeOut * 1000);
        }

        // resolve => then, reject => catch
        new Promise(test).then(function (result) {
            console.log('pass：' + result);
        }).catch(function (reason) {
            console.log('failed: ' + reason);
        });
    })();

    console.log('promise demo.');
}


// demo 02, promise chain
var isDemo02Run = false;
if (isDemo02Run) {
    (function demo02() {
        function multiply(input) {
            return new Promise(function (resolve, reject) {
                console.log('calculating ' + input + ' * ' + input + '...');
                setTimeout(function (err) {
                    if (err) {
                        reject(err);
                    }
                    resolve(input * input);
                }, 500);
            });
        }

        function add(input) {
            return new Promise(function (resolve, reject) {
                console.log('calculating ' + input + ' + ' + input + '...');
                setTimeout(function (err) {
                    if (err) {
                        reject(err);
                    }
                    resolve(input + input);
                }, 1000);
            });
        }

        // promise
        var p = new Promise(function (resolve, reject) {
            console.log('start new Promise...');
            resolve(2);
        });

        p.then(multiply).then(add).then(multiply).then(add).then(function (result) {
            console.log('Got value: ' + result);
        }).catch(function (err) {
            console.error(err);
        });
    })();

    console.log('promise chain demo.');
}


// demo 03, promise.all(), promise.race()
var isDemo03Run = false;
if (isDemo03Run) {
    (function demo03() {
        var p1 = new Promise(function (resolve, reject) {
            setTimeout(() => resolve('P1'), 500);
        });

        var p2 = new Promise(function (resolve, reject) {
            setTimeout(() => resolve('P2'), 1000);
        });

        // run p1 and p2, and exec then after both p1 and p2 done
        Promise.all([p1, p2]).then(function (results) {
            console.log(results);
        });

        // run p1 and p2, and exec then when p1 or p2 done
        Promise.race([p1, p2]).then(function (results) {
            console.log(results);
        });
    })();
}


// demo 04, generator
var isDemo04Run = false;
if (isDemo04Run) {
    (function demo0401() {
        function* Add(x) {
            yield x + 1;
            yield(null);
            var y = 6;
            return x + y;
        }

        var gen = Add(5);
        console.log(gen.next());
        console.log(gen.next());
        console.log(gen.next());
    })();

    (function demo0402() {
        function* Add(x) {
            yield x + 1;
            var y = yield null;
            return x + y;
        }

        var gen = Add(5);
        console.log(gen.next());
        console.log(gen.next());
        console.log(gen.next(7));  // pass value into generator
    })();
}


// demo 05, setTimeOut
var isDemo05Run = false;
if (isDemo05Run) {
    (function demo0501() {
        setTimeout(function fnHello() {
            console.log('hello');
        }, 500);
    })();

    (function demo0502() {
        var fnHello = function () {
            console.log('hello');
        };
        setTimeout(function () {
            fnHello();
        }, 1000);
    })();

    (function demo0503() {
        var fnHello = function () {
            console.log('hello');
        };
        setTimeout(fnHello, 1500);
    })();

    (function demo0504() {
        // pass argument
        var fnHello = function (message) {
            console.log('hello', message);
        };
        setTimeout(fnHello, 2000, 'ZhengJin');
    })();
}


// demo 06, generator
var isDemo06Run = false;
if (isDemo06Run) {
    (function demo06() {
        function* test(p) {
            console.log(p);
            var a = yield p + 1;
            console.log(a);  // 3
        }

        var g = test(1);
        var ret;
        ret = g.next();
        console.log(ret);
        ret = g.next(ret.value + 1);
        console.log(ret);
    })();
}


// demo 07, modules search path
var isDemo07Run = false;
if (isDemo07Run) {
    console.log(module.paths);
}


// demo 08, fn list
var isDemo08Run = false;
if (isDemo08Run) {
    (function demo0801() {
        var fn1 = function (message) {
            console.log('fn1: ' + message);
        };
        var fn2 = function (message) {
            console.log('fn2: ' + message);
        };

        var fnList = [fn1, fn2];
        for (var i = 0, length = fnList.length; i < length; i++) {
            fnList[i](i);
        }
    })();

    (function demo0802() {
        var fnList = [
            function (message) {
                console.log('fn1: ' + message);
            },
            function (message) {
                console.log('fn2: ' + message);
            }];

        for (var i = 0, length = fnList.length; i < length; i++) {
            fnList[i](i);
        }
    })();
}


// demo 09, generator
var isDemo09Run = false;
if (isDemo09Run) {
    (function demo09() {
        function* fn() {
            // yield fn instead of expression
            yield function (callback) {
                console.log(callback.toString());
            };
        }

        var result = fn();
        var step = result.next();  // return fn
        console.log(step);
        console.log(step.value);
        step.value(function () {  // 1. set callback in fn; 2. run fn
            console.log('generator with fn');
        });
    })();
}


// demo 10, sync
var isDemo1001Run = false;
if (isDemo1001Run) {
    (function demo1001() {
        // #1: sync by callback
        function timeDelay(waitTime, callback) {
            setTimeout(function () {
                callback("Pause for " + waitTime);
            }, waitTime);
        }

        timeDelay(3000, function (message) {
            console.log(message);
            timeDelay(1000, function (message) {
                console.log(message);
                timeDelay(500, function (message) {
                    console.log(message);
                });
            });
        });
    })();
}

var isDemo1002Run = false;
if (isDemo1002Run) {
    (function demo1002() {
        // #2: sync by promise
        function timeDelay(waitTime) {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve("Pause for " + waitTime);
                }, waitTime);
            });
        }

        timeDelay(3000)
            .then(function (resolve) {
                console.log('step1');
                console.log(resolve);
                return timeDelay(1000);
            })
            .then(function (resolve) {
                console.log('step2');
                console.log(resolve);
                return timeDelay(500);
            })
            .then(function (resolve) {
                console.log('step3');
                console.log(resolve);
            })
            .catch(function (reason) {
                console.log((reason));
            });
    })();
}

var isDemo1003Run = false;
if (isDemo1003Run) {
    (function demo1003() {
        // #3: sync by generate
        // refer to 'co' example from NodeJsLesson08 -> app_co.js
        function timeDelay(waitTime) {
            return function (callback) {
                setTimeout(function () {
                    callback("Pause for " + waitTime);
                }, waitTime);
            };
        }

        function* async() {
            var ret1 = yield timeDelay(3000);
            console.log(ret1);
            var ret2 = yield timeDelay(1000);
            console.log(ret2);
            var ret3 = yield timeDelay(500);
            console.log(ret3);
        }

        var result = async();
        var step = result.next();
        step.value(function (res) {  // set callback
            var step1 = result.next(res);  // 1. return value to ret1; 2. run to next yield
            step1.value(function (res) {
                var step2 = result.next(res);
                step2.value(function (res) {
                    result.next(res);
                });
            });
        });
    })();
}


// demo 11, array elements distinct
var tmpDuplicatedArr = [1, 2, 3, 4, 5, 3, 2];

var isDemo1101Run = false;
if (isDemo1101Run) {
    (function demo1101() {
        // #1
        var arrUnique01 = function (srcArr) {
            var targetArr = [];

            for (var idx = 0, length = srcArr.length; idx < length; idx++) {
                if (targetArr.indexOf(srcArr[idx]) === -1) {
                    targetArr.push(srcArr[idx]);
                }
            }
            return targetArr;
        };

        console.log(arrUnique01(tmpDuplicatedArr));
    })();
}

var isDemo1102Run = false;
if (isDemo1102Run) {
    (function demo1102() {
        // #2
        var arrUnique02 = function (srcArr) {
            var targetArr = [];
            var tmpObj = {};

            // override for duplicated property
//            for (var idx = 0, length = srcArr.length; idx < length; idx++) {
//                tmpObj[srcArr[idx]] = null;
//            }
            srcArr.map(item => tmpObj[item] = null);

            for (var key in tmpObj) {
                if (tmpObj.hasOwnProperty(key)) {
                    targetArr.push(Number(key));
                }
            }
            return targetArr;
        };

        arrUnique02(tmpDuplicatedArr).forEach(function (element) {
            console.log('Element: ' + element);
        });
    })();
}

var isDemo1103Run = false;
if (isDemo1103Run) {
    (function demo1103() {
        // #3
        var arrUnique03 = function (srcArr) {
            var targetArr = [];
            var tmpObj = {};
            var tmpElement;

            for (var idx = 0, length = srcArr.length; idx < length; idx++) {
                tmpElement = srcArr[idx];
                if (!tmpObj[tmpElement]) {
                    tmpObj[tmpElement] = 1;
                    targetArr.push(tmpElement);
                }
            }
            return targetArr;
        };

        console.log(arrUnique03(tmpDuplicatedArr));
    })();
}

var isDemo1104Run = false;
if (isDemo1104Run) {
    (function demo1104() {
        // #4
        var arrUnique04 = function (srcArr) {
            var targetArr = [];

            srcArr.sort();
            for (var idx = 0, length = srcArr.length; idx < length; idx++) {
                if (srcArr[idx] !== targetArr[targetArr.length - 1]) {
                    targetArr.push(srcArr[idx]);
                }
            }

            return targetArr;
        };

        console.log(arrUnique04(tmpDuplicatedArr));
    })();
}

var isDemo1105Run = false;
if (isDemo1105Run) {
    (function demo1105() {
        // #5
        var tmpSet = new Set(tmpDuplicatedArr);
        tmpSet.forEach(element => console.log('Element:', element));
    })();
}


// demo 12, unicode
var isDemo12Run = false;
if (isDemo12Run) {
    (function demo12() {
        // utf-16 with 2 bytes
        var helloCn = '\u597D';
        console.log(helloCn);
        console.log(String.fromCodePoint(0x597D));

        // special char with one or two bytes
        var tmpCharByOneByte = '\u01D1';
        console.log(tmpCharByOneByte);
        var tmpCharByTwoBytes = '\u004F\u030C';
        console.log(tmpCharByTwoBytes);

        if (tmpCharByOneByte.normalize() === tmpCharByTwoBytes.normalize()) {
            console.log('The same char.');
        }

        // fromCodePoint()
        console.log(String.fromCodePoint(42));  // Decimal
        console.log(String.fromCodePoint(0x002A));  // Hex Decimal

        // codePointAt()
        console.log('*'.codePointAt(0));

        // ascii
        var charAsc = '\x41';
        console.log('char:', charAsc);
    })();
}


// demo 13, generator
var isDemo13Run = false;
if (isDemo13Run) {
    (function demo13() {
        var myGenerator = function* (maxValue) {
            for (var i = 0; i < maxValue; i++) {
                yield i;
            }
        };

        var gen1 = myGenerator(3);
        console.log('Type:', typeof(gen1));
        console.log(gen1.next());
        console.log(gen1.next());
        console.log(gen1.next());
        console.log(gen1.next());

        // bad
        var gen2 = myGenerator(5);
        console.log('iterator generator by for in:');
        for (let item in gen2) {
            if (gen2.hasOwnProperty(item)) {
                console.log('item:', item);
            }
        }

        // good
        console.log('iterator generator by for of:');
        for (let item of myGenerator(5)) {
            console.log('item:', item);
        }
    })();
}


console.log(__filename, 'DONE.');
