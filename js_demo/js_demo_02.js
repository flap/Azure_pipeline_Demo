//'use strict';

/**
 * Created by zhengjin on 2016/10/26.
 */

// demo 01, prototype chain
var isDemo01Run = false;
if (isDemo01Run) {
    (function demo01() {
        function Thing() {
        }

        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            console.log(this.foo);
        };
        Thing.prototype.setFoo = function (newFoo) {
            this.foo = newFoo;
        };
        Thing.prototype.deleteFoo = function () {
            delete this.foo;
        };

        var thing1 = new Thing();
        var thing2 = new Thing();

        thing1.logFoo();
        thing2.logFoo();
        console.log(Thing.prototype.foo + '\n');

        thing1.setFoo('foo');
        thing1.logFoo();  // foo
        thing2.logFoo();  // bar
        console.log(Thing.prototype.foo + '\n');  // bar

        thing2.foo = 'foobar';
        thing1.logFoo();  // foo
        thing2.logFoo();  // foobar
        console.log(Thing.prototype.foo + '\n');  // bar

        thing1.deleteFoo();
        thing1.logFoo();
        console.log(Thing.prototype.foo + '\n');
    })();
}


// demo 02, prototype chain
var isDemo02Run = false;
if (isDemo02Run) {
    (function demo02() {
        function Thing() {
        }

        Thing.prototype.foo = 'bar';  // prototype object
        Thing.prototype.logFoo = function () {
            console.log(this.foo + '\n' + Thing.prototype.foo);
        };

        var thing = new Thing();
        thing.foo = 'foo';  // object
        thing.logFoo();
    })();
}


// demo 03, prototype chain
var isDemo03Run = false;
if (isDemo03Run) {
    (function demo03() {
        function Thing1() {
        }

        Thing1.prototype.foo = 'bar';

        function Thing2() {
        }

        Thing2.prototype = new Thing1();

        Thing2.prototype.logFoo = function () {
            console.log(this.foo);
        };

        var thing = new Thing2();
        thing.logFoo();
        console.log(thing.foo);
    })();
}


// demo 04, context: bind
var isDemo04Run = false;
if (isDemo04Run) {
    (function demo04() {
        function Thing() {
        }

        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            console.log(this.foo);
        };

        function doIt(method) {
            method();
        }

        var thing = new Thing();
        doIt(thing.logFoo);  // undefined
        doIt(thing.logFoo.bind(thing));  // bar
    })();
}


// demo 05, context: bind, apply and call
var isDemo05Run = false;
if (isDemo05Run) {
    (function demo05() {
        function Thing() {
        }

        Thing.prototype.foo = 'bar';

        function logFoo(aStr) {
            console.log(aStr, this.foo);
        }

        var thing = new Thing();
        logFoo.bind(thing)('using bind');
        logFoo.apply(thing, ['using apply']);
        logFoo.call(thing, 'using call');
    })();
}


// demo 06, context: with
var isDemo06Run = false;
if (isDemo06Run) {
    (function demo06() {
        function Thing() {
        }

        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            with (this) {
                console.log(foo);
                foo = 'foo';
            }
        };

        var thing = new Thing();
        thing.logFoo();  // bar
        console.log(thing.foo); // foo
        console.log(Thing.prototype.foo);  // bar
    })();
}


// demo 07, context
var isDemo07Run = false;
if (isDemo07Run) {
    (function demo07() {
        function Thing(type) {
            this.type = type;
        }

        Thing.prototype.log = function (aStr) {
            console.log(this.type, aStr);
        };
        Thing.prototype.logThings = function (arr) {
//            arr.forEach(this.log);
            arr.forEach(this.log, this);
        };

        var thing = new Thing('fruit');
        thing.logThings(['apples', 'orange', 'banana']);
    })();
}


// demo 08, generator
// #1: function, return array
var isDemo0801Run = false;
if (isDemo0801Run) {
    (function demo0801() {
        function fib(max) {
            var t,
                a = 0,
                b = 1,
                arr = [0, 1];

            while (arr.length < max) {
                t = a + b;
                a = b;
                b = t;
                arr.push(t);
            }

            return arr;
        }

        console.log(fib(10));
    })();
}

// #2: generator, return each value
var isDemo0802Run = false;
if (isDemo0802Run) {
    (function demo0802() {
        function* fib(max) {
            var t,
                a = 0,
                b = 1,
                n = 1;

            while (n < max) {
                yield a;
                t = a + b;
                a = b;
                b = t;
                n++;
            }

            return a;
        }

        console.log('Iterator 1:');
        var fn = fib(10);
        while (true) {
            let tmpObj = fn.next();
            if (tmpObj.done) {
                break;
            }
            console.log(tmpObj.value);
        }

        console.log('Iterator 2:');
        for (let x of fib(10)) {
            console.log(x);
        }
    })();
}


// #3: object, keep status via instance properties
var isDemo0803Run = false;
if (isDemo0803Run) {
    (function demo0803() {
        var fib = {
            a: 0,
            b: 1,
            n: 0,
            max: 10,  // to be set
            next: function () {
                var r = this.a,
                    t = this.a + this.b;
                this.a = this.b;
                this.b = t;
                if (this.n < this.max) {
                    this.n++;
                    return r;
                } else {
                    return undefined;
                }
            }
        };

        while (true) {
            let tmpRet = fib.next();
            if (tmpRet === undefined) {
                break;
            }
            console.log(tmpRet);
        }
    })();
}


// demo 09, RegExp
var isDemo09Run = false;
if (isDemo09Run) {
    (function demo0901() {
        var re = new RegExp('^\\d{3}\\-\\d{3,8}$');
//        var re = /^\d{3}\-\d{3,8}$/;
        console.log(re.test('010-12345'));
        console.log(re.test('010-1234x'));
        console.log(re.test('010 12345'));
    })();

    (function demo0902() {
        // RegExp in split()
        console.log('a b   c'.split(/\s+/));
        console.log('a,b, c,   d'.split(/[\s\,]+/));
    })();

    (function demo0903() {
        // RegExp, group
        var re1 = /^(\d{3})\-(\d{3,8})$/;
        console.log(re1.exec('010-12345'));
        console.log(re1.exec('010 12345'));  // null

        var re2 = /^(\d+)(0*)$/;
        console.log(re2.exec('102300'));

        var re3 = /^(\d+?)(0*)$/;
        console.log(re3.exec('102300'));
    })();

    (function demo0904() {
        // global search
        var tmpStr = 'JavaScript, VBScript, JScript and ECMAScript';
        var re = /[a-zA-Z]+cript/g;
        console.log(re.exec(tmpStr));
        console.log(re.lastIndex);
        console.log(re.exec(tmpStr));
        console.log(re.lastIndex);
    })();
}


// demo 10, inherit by prototype
var isDemo10Run = false;
if (isDemo10Run) {
    (function demo10() {
        // step1: define parent and child class
        function Student(props) {
            this.name = props.name || 'Unnamed';
        }

        Student.prototype.hello = function () {
            console.log('Hello ' + this.name + '!');
        };

        function PrimaryStudent(props) {
            Student.call(this, props);
            this.grade = props.grade || 1;
        }

        // step2: define inherit relationship
        // #1
        //function F() {
        //}
        //F.prototype = Student.prototype;
        //PrimaryStudent.prototype = new F();
        //PrimaryStudent.prototype.constructor = PrimaryStudent;

        // #2
        function inherits(Child, Parent) {
            var tmpObj = function () {
            };
            tmpObj.prototype = Parent.prototype;
            Child.prototype = new tmpObj();
            Child.prototype.constructor = Child;
        }

        inherits(PrimaryStudent, Student);

        PrimaryStudent.prototype.getGrade = function () {
            return this.grade;
        };

        // step3: create object and check relationship
        var xiaoming = new PrimaryStudent({
            name: 'XiaoMing',
            grade: 2
        });
        xiaoming.hello();
        console.log('Grade at:', xiaoming.getGrade());

        console.log('object:', xiaoming.__proto__);

        console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
        console.log(xiaoming.__proto__.__proto__ === Student.prototype);

        console.log(xiaoming instanceof PrimaryStudent);
        console.log(xiaoming instanceof Student);

        console.log(PrimaryStudent.__proto__);
        console.log(Student.__proto__);
    })();
}


// demo 11, inherit by using 'class'
var isDemo11Run = false;
if (isDemo11Run) {
    (function demo11() {
        'use strict';
        class Student {
            constructor(name) {
                this.name = name;
            }

            hello() {
                console.log('Hello, ' + this.name + '!');
            }
        }

        class PrimaryStudent extends Student {
            constructor(name, grade) {
                super(name);
                this.grade = grade;
            }

            myGrade() {
                console.log('I am at grade ' + this.grade);
            }
        }

        var xiaoming = new PrimaryStudent('XiaoMing', 2);
        xiaoming.hello();
        xiaoming.myGrade();

        console.log(xiaoming instanceof PrimaryStudent);
        console.log(xiaoming instanceof Student);
    })();
}


// demo 12, get current date by join
var isDemo12Run = false;
if (isDemo12Run) {
    var myDate = new Date();
    var dateItems = [myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate()];
    console.log(dateItems.join('-'));
}


// demo 13, for of
var isDemo13Run = false;
if (isDemo13Run) {
    (function () {
        const tmpArr = ['a', 'b', 'c'];
        for (let item of tmpArr) {
            console.log(item);
        }
    })();
}


// demo 14, RegExp in replace()
var isDemo14Run = false;
if (isDemo14Run) {
    (function demo14() {
        var myTrim = function (tmpStr) {
            var re = /^\s+|\s+$/g;
            return tmpStr.replace(re, '');
        };
        console.log('Updated:', myTrim('  test trim spaces.  '));
    })();
}


// demo 15, get sub array
var isDemo15Run = false;
if (isDemo15Run) {
    (function demo15() {
        var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, 'Doe' , 2154 , 119];

        //#1, slice(start, end)
        console.log(items.slice(3, 5));

        //#2, by length which is a RW property
        items.length = 4;  // get 0-3 item
        items.length = 11;  // expand to 11 items with ''
        console.log(items);
    })();
}


// demo 16, splice(start, number), update items in array
var isDemo16Run = false;
if (isDemo16Run) {
    (function demo16() {
        var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, 'Doe' , 2154 , 119];
        console.log('length:', items.length);

        // bad, delete is used for object property, but not array element
//        delete items[3];
        // good, remove element
        console.log('remove item:', items.splice(2, 1));

        console.log('length:', items.length);
        console.log(items);
    })();
}


// demo 17, toFixed(), toPrecision()
var isDemo17Run = false;
if (isDemo17Run) {
    (function demo17() {
        var num = 2.446242342;
        console.log(num.toFixed(2));
        console.log(num.toPrecision(3));
    })();
}


// demo 18, static func, prototype func, instance func
var isDemo18Run = false;
if (isDemo18Run) {
    (function () {
        function MyClass(name, age) {
            this.name = name;
            this.age = age;
            this.instanceSay = function () {
                console.log(`name: ${this.name}, age: ${this.age}`);
            }
        }

        MyClass.staticSay = function () {
            console.log('this is static function in MyClass.');
        };

        MyClass.prototype.protoSay = function () {
            console.log('this is prototype function in MyClass.');
        };

        var c1 = new MyClass('Jone', 21);

        var c2 = new MyClass('Jerry', 19);

        MyClass.staticSay();
        c1.protoSay();
//        c1.staticSay(); // error
        c1.instanceSay();
        c2.instanceSay();

        console.log('instance func equal:', c1.instanceSay == c2.instanceSay);
        console.log('prototype func equal:', c1.protoSay == c2.protoSay)
    })();
}


// demo 19, closure
var isDemo19Run = false;
if (isDemo19Run) {
    (function () {
        // #1
        console.log('closure in object:');
        function Foo() {
            var myPrivate = 'init';
            this.getPrivate = function () {
                return myPrivate;
            };
            this.setPrivate = function (text) {
                myPrivate = text;
            };
        }

        var f = new Foo();
        console.log('private value:', f.getPrivate());
        f.setPrivate('changed');
        console.log('updated private value:', f.getPrivate());
    })();

    // #2
    console.log('closure in function:');
    function addBase(base) {
        return function (x) {
            return base + x;
        }
    }

    base2 = addBase(2);
    console.log('output base2:', base2(4));
    base4 = addBase(4);
    console.log('output base4:', base4(10));
}


console.log(__filename, 'DONE.');
