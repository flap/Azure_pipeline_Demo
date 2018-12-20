/**
 * Created by zhengjin on 2017/4/27.
 */

// demo 01, callback in setTimeout()
var isDemo01Run = false;
if (isDemo01Run) {
    (function demo01() {
        var logDelay1 = function (input) {
            setTimeout(function (text) {
                console.log('text:', text);
            }, 1000, input);
        };

        var logDelay2 = function (input) {
            setTimeout(function () {
                console.log('text:', input);
            }, 2000);
        };

        var logDelay3 = function (input) {
            setTimeout(x => console.log('text:', x), 3000, input);
        };

        var logDelay4 = function (input) {
            setTimeout(() => console.log('text:', input), 4000);
        };

        logDelay1('test1');
        logDelay2('test2');
        logDelay3('test3');
        logDelay4('test4');
    })();
}


// demo 02, check object property exist
var isDemo02Run = false;
if (isDemo02Run) {
    (function demo02() {
        // match null, undefined, false, '' and 0
        var isPropertyExist1 = function (tmpProperty) {
            return Boolean(tmpProperty);
        };

        // == null match for both null and undefined
        var isPropertyExist2 = function (tmpProperty) {
            return tmpProperty != null;
        };

        var tmpObject = {
            name: 'test',
            age: 17,
            tmpUndefined: undefined,
            tmpFalse: false,
            tmpEmpty: '',
            tmpZero: 0
        };

        console.log(isPropertyExist1(tmpObject.name));
        console.log(isPropertyExist2(tmpObject.name));

        console.log(isPropertyExist1(tmpObject.tmpUndefined));
        console.log(isPropertyExist2(tmpObject.tmpUndefined));

        console.log(isPropertyExist1(tmpObject.tmpFalse));
        console.log(isPropertyExist2(tmpObject.tmpFalse));

        console.log(isPropertyExist1(tmpObject.tmpEmpty));
        console.log(isPropertyExist2(tmpObject.tmpEmpty));

        console.log(isPropertyExist1(tmpObject.tmpZero));
        console.log(isPropertyExist2(tmpObject.tmpZero));
    })();
}


// demo 03, args
var isDemo03Run = false;
if (isDemo03Run) {
    var tmpInputArgs = process.argv;
    if (tmpInputArgs.length > 0) {
        tmpInputArgs.forEach(function (val, idx) {
            console.log(idx + ': ' + val);
        });
    }
}


// demo 04-01, arrays of fns
var isDemo0401Run = false;
if (isDemo0401Run) {
    (function () {
        var stack = [];

        function fn1() {
            console.log('fn1 invoked.');
        }

        stack.push(fn1);

        function fn2() {
            console.log('fn2 invoked.');
        }

        stack.push(fn2, function () {
            console.log('fn3 invoked.');
        });

        stack.forEach(fn => fn());
    })();
}


// demo 04-02, arrays of fns, sync
var isDemo0402Run = false;
if (isDemo0402Run) {
    (function () {
        var stack = [];
        var index = 0;

        function next() {
            if (index > (stack.length - 1)) {
                console.log('End of stack.');
                return;
            }

            var fn = stack[index];
            index = index + 1;
            if (typeof fn === 'function') {
                fn();
            }
        }

        function fn1() {
            console.log('fn1 invoked.');
            next();
        }

        stack.push(fn1);

        function fn2() {
            setTimeout(function fn2Timeout() {
                console.log('fn2Timeout invoked.');
                next();
            }, 1000);
        }

        stack.push(fn2, function () {
            console.log('fn3 invoked.');
            next();
        });

        next();
    })();
}


// demo 05, define private var
var isDemo05Run = false;
if (isDemo05Run) {
    (function () {
        function Product(value, price) {
            var name = value;  // private
            this.price = price;
            this.setName = function (value) {
                name = value;
            };
            this.getName = function () {
                return name;
            };
        }

        var p = new Product();
        p.setName('FundBug');
        p.price = 100;

        console.log(p.name);
        console.log(p.price);
        console.log(p.getName());
    })();
}


// demo 06, script as module
var isDemo06Run = false;
if (isDemo06Run) {
    var module = (function () {
        var N = 5;  // as private var

        function print(x) {  // as private method
            console.log('The result is:', x);
        }

        function add(a) {  // as public method
            var x = a + N;
            print(x);
        }

        return {
            desc: 'This is description',  // as public var
            add: add
        };
    })();

    console.log(module.desc);
    module.add(5);
}


// demo 07, call and apply
var isDemo0701Run = false;
if (isDemo0701Run) {
    (function () {
        var user = {
            greet: 'Hello!',
            greetUser: function (userName) {
                console.log(this.greet, userName);
            }
        };

        var greet1 = {
            greet: 'Hola'
        };

        user.greetUser.call(greet1, 'Raul');
        user.greetUser.apply(greet1, ['Raul']);
    })();
}

var isDemo0702Run = false;
if (isDemo0702Run) {
    (function () {
        var myPrints = function (v1, v2, v3) {
            console.log('value1=' + v1, 'value2=' + v2, 'value3=' + v3);
        };

        // individual arguments
        myPrints.call(this, 'test1', 'test2', 'test3');

        // pass array of values
        var values = ['test1', 'test2', 'test3'];
        myPrints.apply(this, values)
    })();
}


// demo 08
// built-in "arguments": args when function is invoked
// fn.length: args when function is defined
var isDemo08Run = false;
if (isDemo08Run) {
    function argTest(arg1, arg2) {  // define with 2 args
        console.log('outer args:', arguments);
        console.log(arg1, arg2);

        return function () {  // define without args
            console.log('inner args:', arguments);
        }
    }

    fn = argTest('test_arg1', 'test_arg2', 'test_arg3');  // pass 3 args
    fn('test_arg4');  // pass 1 arg

    console.log(argTest.length);  // 2
    console.log(fn.length);  // 0
}


// demo 09, var in output string
var isDemo09Run = false;
if (isDemo09Run) {
    (function () {
        var userName = 'zheng jin';
        console.log(`hello world, ${userName}`);
    })();
}


// demo 10, boolean convert
var isDemo10Run = false;
if (isDemo10Run) {
    (function () {
        var strTrue = 'True';
        console.log(Boolean(strTrue) ? 'pass' : 'fail');  // always pass
        console.log((strTrue.toLowerCase() === 'true') ? 'pass' : 'fail');

        var tmpInt = 1;
        console.log('source value:', tmpInt++);
        console.log('increase:', tmpInt);
        console.log('increase:', ++tmpInt);
    })();
}


// demo 11, Object build-in methods
var isDemo11Run = false;
if (isDemo11Run) {
    (function () {
        // #1
        console.log('fn Object.is():', Object.is('test', 'test'));

        // #2
        var tmpObj1 = {name: 'kong', age: 18, func: function () {
        }};
        console.log('\nfn Object.keys():', Object.keys(tmpObj1));

        // #3
        var tmpObj2 = {};
        Object.defineProperty(tmpObj2, 'name', {
            value: 'zheng jin',
            enumerable: true
        });
        Object.defineProperties(tmpObj2, {
            age: {
                value: 30,
                enumerable: true
            },
            job: {
                value: 'tester',
                enumerable: false
            }
        });
        console.log('\nfn Object.defineProperties():\n', JSON.stringify(tmpObj2, null, '  '));

        // #4
        console.log('\nfn Object.hasOwnProperty:');
        var tmpStr = new String('abc');
        console.log(tmpStr.hasOwnProperty('split'));
        console.log(tmpStr.__proto__.hasOwnProperty('split'));

        // #5, prototype chain and hasOwnProperty()
        function SuperType() {
            this.type = 'super type';
        }

        SuperType.prototype.toString = function () {
            console.log('type:', this.type);
        };
        SuperType.sayHello = function () {
            console.log('hello, world');
        };

        function SubType() {
            this.type = 'sub type';
        }

        SubType.prototype = new SuperType();

        var t = new SubType();
        console.log('\nfn Object.hasOwnProperty:');
        console.log(t.hasOwnProperty('toString'));
        console.log(t.__proto__.hasOwnProperty('sayHello'));
        console.log(t.__proto__.constructor.hasOwnProperty('sayHello'));
        console.log(t.__proto__.constructor.prototype.hasOwnProperty('toString'));
    })();
}


// demo 12, Object.assign()
var isDemo12Run = false;
if (isDemo12Run) {
    (function () {
        var id = Symbol('id');
        var tmpObj1 = {firstName: 'zheng', lastName: 'jin', [id]: 'WH'};
        Object.defineProperty(tmpObj1, 'age', {
            value: 30,
            enumerable: false
        });

        var copy = Object.assign({}, tmpObj1);
        console.log('Object copy:\n', JSON.stringify(copy, null, '  '));

        var tmpObj2 = {score: 91, skills: ['Java', 'Python', 'JS']};
        var merge = Object.assign({}, tmpObj1, tmpObj2);
        console.log('\nObject merge:\n', JSON.stringify(merge, null, '  '));
    })();
}


// demo 13, enumerable property, only be defined by Object.defineProperty()
var isDemo13Run = false;
if (isDemo13Run) {
    (function () {
        function Person() {
            this.name = 'zhengjin';
        }

        Person.prototype = {
            constructor: Person,
            job: 'tester'
        };

        var p = new Person();
        Object.defineProperty(p, 'sex', {value: 'male', enumerable: false});
        console.log(`person sex: ${p.sex}`);
        console.log('name property enumerable:', p.propertyIsEnumerable('name'));
        console.log('sex property enumerable:', p.propertyIsEnumerable('sex'));

        console.log('\niterator:');
        for (var key in p) {
            if (p.hasOwnProperty(key)) {
                console.log('p.' + key + ' = ' + p[key]);
            }
        }
        console.log('\nObject.keys:\n' + Object.keys(p));
        console.log('\nJSON string:\n' + JSON.stringify(p, null, '  '));
    })();
}


// demo 14, Symbol
var isDemo14Run = false;
if (isDemo14Run) {
    (function () {
        var id1 = Symbol('id');
        var id2 = Symbol('id');
        console.log(id1);
        console.log(typeof id1);
        console.log('Symbol with same value equals:', (id1 === id2));

        // set key as symbol
        var person = {
            name: 'zheng jin',
            [id1]: 'WH'
        };
        person[id2] = 'SH';

        // get symbol
        console.log('\nPerson name:', person['name']);
        console.log(`Person ids: id1=${person[id1]}, id2=${person[id2]}`);

        // iterator on symbol key
        console.log('\nGet person properties:');
        for (var key in person) {
            if (person.hasOwnProperty(key)) {
                console.log(key);
            }
        }
        console.log('Get person keys:', Object.keys(person));
    })();
}


// demo 15, js code style for es6
var isDemo15Run = false;
if (isDemo15Run) {
    (function () {
        // #1, object shorthand
        let title = 'test:';
        const tmpObj = {
            title, // title: title
            desc: 'create object shorthand',
            myPrint() { // myPrint: function() {...}
                console.log(title, this.desc);
            }
        };
        tmpObj.myPrint();

        // #2, de-construct
        let tmpObj1 = {
            top: 0,
            bottom: 1080,
            left: 0,
            right: 1920
        };
        const { right, bottom } = tmpObj1;
        console.log(`\nscreen size: ${right} * ${bottom}`);

        // #3, array copy
        let tmpArr = ['java', 'python', 'javascript', 'c++'];
        let copyArr = [...tmpArr];
        console.log('\narray copy: ' + copyArr.join(', '));
    })();
}

// demo 16, fn in object
var isDemo16Run = false;
if (isDemo16Run) {
    (function () {
        obj = {
            id: 'test id',
            retFn1: function() {
                return 'ret string from retFn1';
            },
            retFn2: () => {
                return 'ret string from retFn2';
            },
            'retFn3' (){
                return 'ret string from retFn3';
            },
        };

        console.log(obj.id);
        console.log(obj.retFn1());
        console.log(obj.retFn2());
        console.log(obj.retFn3());
    })();
}


console.log(__filename, 'DONE.');
