/**
 * Created by zhengjin on 2016/12/8.
 */

// demo 01, date
var isDemo01Run = false;
if (isDemo01Run) {
    (function demo01() {
        var myDate = new Date();
        console.log('cur date: %d-%d-%d', myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate());
        console.log('cur date:', [myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate()].join('-'));

        console.log(myDate.getDate());
        console.log(myDate.getDay());  // week day
    })();
}


// demo 02, type convert
var isDemo02Run = false;
if (isDemo02Run) {
    (function demo02() {
        var tmpInt1 = 5;
        var tmpStr1 = String(tmpInt1);
        console.log(typeof tmpStr1);

        var tmpStr2 = '5';
        var tmpInt2 = parseInt(tmpStr2);
        console.log(typeof tmpInt2);

        var tmpStr3 = '';
        console.log('length:', tmpStr3.length);
    })();
}


// demo 03, RegExp
var isDemo03Run = false;
if (isDemo03Run) {
    (function demo03() {
        var tmpStr11 = '-2';
        var tmpStr12 = '-2℃';
        var re1 = /-?[0-9]+/;
        console.log(re1.exec(tmpStr11));
        console.log(re1.exec(tmpStr12));

        var tmpStr21 = '低温 -2℃';
        var tmpStr22 = '-2';
        var re2 = /(-?\d+)℃?/;
        console.log(re2.exec(tmpStr21));
        console.log(re2.exec(tmpStr22));

        var tmpStr31 =
            '(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{{BeiJing}}%22)%20and%20u%3D%22c%22';
        var re3 = /{{(.+)}}/;
        console.log(re3.exec(tmpStr31));
    })();
}


// demo 04, foreach
var isDemo04Run = false;
if (isDemo04Run) {
    (function demo04() {
        var tmpArr = ['Java', 'C++', 'Python'];

        tmpArr.forEach(function (ele) {
            console.log(ele);
        });

        tmpArr.forEach(function (ele, idx) {
            console.log(ele + ' at position ' + idx);
        });
    })();
}


// demo 05, RegExp with option gm in replace()
var isDemo05Run = false;
if (isDemo05Run) {
    (function demo05() {
        var tmpStr = '2016/12/29';
        console.log(tmpStr.replace(new RegExp('/', 'gm'), '-'));
    })();
}


//demo 06, json
var isDemo06Run = false;
if (isDemo06Run) {
    (function demo06() {
        var tmpJsonObj = {
            data: {
                cityId: '0001',
                city: 'wuhan'
            }
        };

        var data = tmpJsonObj.data;
        data.cityId = '0002';
        console.log(JSON.stringify(tmpJsonObj));
    })();
}


// demo 07, json
var isDemo07Run = false;
if (isDemo07Run) {
    (function demo07() {
        var tmpJsonObj = {
            data: {
                cityId: '0001',
                city: 'wuhan'
            }
        };

        var logCityId = function (tmpJsonObj) {
            if (tmpJsonObj.data) {
                if (tmpJsonObj.data.cityId) {
                    console.log('City id: ' + tmpJsonObj.data.cityId);
                }
            }
        };

        console.log(JSON.stringify(tmpJsonObj));
        logCityId(tmpJsonObj);
    })();
}


// demo 08, fn, => fn
var isDemo08Run = false;
if (isDemo08Run) {
    (function demo08() {
        function myPrint(text) {
            console.log('Value: ' + text);
        }

        var myPrintRef = myPrint;
        myPrintRef('test');

        var tmpArr = ['test1', 'test2', 'test3'];
        tmpArr.forEach(myPrintRef);

        tmpArr.forEach((ele, idx) => {
            console.log('position at: %s, value: %s', ele, idx);
        });
    })();
}


// demo 09, random time
var isDemo09Run = false;
if (isDemo09Run) {
    (function demo09() {
        var getRandom = function (range) {
            var tmpRandom = Math.round(Math.random() * range);
            if (tmpRandom === 10) {
                return 0;
            }
            return tmpRandom;
        };

        var myTime = new Date().getTime();
        console.log('Current time: ' + (myTime + getRandom(10)).toString());
    })();
}


// demo 10, return from callback
var isDemo10Run = false;
if (isDemo10Run) {
    (function demo10() {
        var myCallback = function (myFlag) {
            setTimeout(function () {
                if (!myFlag) {
                    console.log('False, return from callback.');
                    return;
                }
                console.log('True, run end.')
            }, 1000);
        };

        var isTest = false;
        myCallback(isTest);
    })();
}


// demo 11, array, push/pop, shift/unshift
var isDemo11Run = false;
if (isDemo11Run) {
    (function demo11() {
        // from bottom
        var tmpArrPush = [];
        tmpArrPush.push('a');
        tmpArrPush.push('b');
        tmpArrPush.push('c');
        console.log('Array after push:', tmpArrPush);

        console.log('Pop element:', tmpArrPush.pop());
        console.log('Array after pop:', tmpArrPush);

        // from top
        var tmpArrShift = [];
        tmpArrShift.unshift('a');
        tmpArrShift.unshift('b');
        tmpArrShift.unshift('c');
        console.log('Array after unshift:', tmpArrShift);

        console.log('Shift element:', tmpArrShift.shift());
        console.log('Array after shift:', tmpArrShift);
    })();
}


// demo 12, functional program
var isDemo12Run = false;
if (isDemo12Run) {
    (function demo12() {
        const isKitten = cat => cat.months < 7;
        const getName = cat => cat.name;
        const getKittenNames = cats => cats.filter(isKitten).map(getName);

        const cats = [
            { name: 'Mojo', months: 84 },
            { name: 'Mao-Mao', months: 34 },
            { name: 'Waffles', months: 4 },
            { name: 'Pickles', months: 6 }
        ];
        const kittens = getKittenNames(cats);
        console.log(kittens);
    })();
}


// demo 13, prototype object
var isDemo13Run = false;
if (isDemo13Run) {
    (function demo13() {
        // fn_object.prototype and instance.__proto__ point to prototype_object
        var Person = function () {
        };
        Person.prototype.type = 'Person';
        Person.prototype.maxAge = 100;

        var p = new Person();
        p.name = 'rainy';
        console.log(p.maxAge);
        console.log(p.name);

        console.log(p.__proto__ === Person.prototype);
        console.log(Person.prototype.constructor === Person);
    })();
}


// demo 14, prototype
var isDemo14Run = false;
if (isDemo14Run) {
    (function demo14() {
        var MyObj = function () {
        };
        var o = new MyObj();

        // Line1
        // function chain: instance => constructor => Function
        // constructor.prototype: find related prototype object
        // constructor.__proto__: find super prototype object

        // instance => constructor
        console.log('o_instance.__proto__ = MyObj_constructor.prototype = MyObj_prototype_object =>');
        console.log(o.__proto__ === MyObj.prototype);
        console.log('MyObj_prototype_object.constructor = MyObj_constructor =>');
        console.log(o.__proto__.constructor === MyObj);

        // constructor => Function
        console.log('MyObj_constructor.__proto__ = Function.prototype = fn_prototype_object =>');
        console.log(MyObj.__proto__ === Function.prototype);
        console.log('fn_prototype_object.constructor = Function_constructor =>');
        console.log(MyObj.__proto__.constructor === Function);

        console.log('Object_constructor.__proto__ = Function.prototype = fn_prototype_object =>');
        console.log(Object.__proto__ === Function.prototype);
        console.log('fn_prototype_object.constructor = Function_constructor =>');
        console.log(Object.__proto__.constructor === Function);

        // Function self
        console.log('Function_constructor.__proto__ = Function.prototype = fn_prototype_object =>');
        console.log(Function.__proto__ === Function.prototype);
        console.log('fn_prototype_object.constructor = Function_constructor =>');
        console.log(Function.__proto__.constructor === Function);

        // Line2
        // prototype objects chain: my_prototype_object => Object_prototype_object
        // Root object: Object
        console.log('MyObj_prototype_object.__proto__ = Object_prototype_object =>');
        console.log(MyObj.prototype.__proto__ === Object.prototype);
        console.log('MyObj_prototype_object.__proto__ = Object_prototype_object =>');
        console.log(o.__proto__.__proto__ === Object.prototype);

        // Function_prototype_object => Object_prototype_object
        console.log('Function_prototype_object.__proto__ = Object_prototype_object =>');
        console.log(Function.prototype.__proto__ === Object.prototype);

        // Object_prototype_object => null
        console.log('Object_prototype_object.__proto__ = null =>');
        console.log(Object.prototype.__proto__ === null);

        // instanceof
        console.log('o instanceof MyObj => ' + String(o instanceof MyObj));
        console.log('o instanceof Object => ' + (o instanceof Object ? 'true' : 'false'));
        console.log('o instanceof Function => ' + (o instanceof Function ? 'true' : 'false'));
    })();
}


// demo 15, OO inherit
var isDemo15Run = false;
if (isDemo15Run) {
    (function demo15() {
        function SuperType() {
            this.property = 'super';
            this.colors = ['red', 'green', 'blue'];
        }

        SuperType.prototype.getSuperValue = function () {
            return this.property;
        };

        function SubType() {
            this.subProperty = 'sub';
        }


        // for statement: SubType.prototype = new SuperType();
        // it contains 2 steps:
        // step1. SubType.prototype = {};
        // step2. SubType.prototype.__proto__ = SuperType.prototype

        // the order for below 2 statements can NOT change
        SubType.prototype = new SuperType();
        SubType.prototype.getSubValue = function () {
            return this.subProperty;
        };

        var instance = new SubType();
        console.log(instance.getSubValue());
        console.log(instance.getSuperValue());

        console.log(instance instanceof SubType);
        console.log(instance instanceof SuperType);
        console.log(instance instanceof Object);

        console.log('SuperType_constructor.__proto__ === SubType_constructor.__proto__ === fn_prototype_object =>');
        console.log(SuperType.__proto__ === Function.prototype);
        console.log(SubType.__proto__ === Function.prototype);

        // prototype chain check
        console.log('SubType_prototype_object.__proto__ = SuperType_prototype_object =>');
        console.log(SubType.prototype.__proto__ === SuperType.prototype);
        console.log(instance.__proto__.__proto__ === SuperType.prototype);

        console.log('SuperType_prototype_object.__proto__ = Object_prototype_object =>');
        console.log(SuperType.prototype.__proto__ === Object.prototype);
        console.log('SuperType_prototype_object is an instance of Object =>');
        console.log(SuperType.prototype instanceof Object);


        // 1. update instance var which is reference
        instance.colors.push('black');
        console.log(instance.colors);

        // 2. change is applied to another SubType instance
        var instance1 = new SubType();
        console.log(instance1.colors);

        // 3. SuperType instance is not changed
        var instance2 = new SuperType();
        console.log(instance2.colors);

        console.log('SubType_prototype_object is an instance of SuperType =>');
        console.log(instance.__proto__ instanceof SuperType);
    })();
}


// demo 16, "this" in "=>function"
var isDemo16Run = false;
if (isDemo16Run) {
    (function demo16() {
        function Foo() {
            var that = this;
            this.arrow = () => {
                console.log(this.name);
            };
            this.simulationArrow = () => {
                console.log(that.name);
            };

            this.common = function () {
                console.log(this.name);
            };
            this.commonThat = function () {
                console.log(that.name);
            };
            this.commonBind = function () {
                console.log(this.name);
            }.bind(this);
        }

        var f = new Foo();
        f.name = 'foo';

        var arrow = f.arrow;
        var simulationArrow = f.simulationArrow;
        var common = f.common;  // undefined
        var commonThat = f.commonThat;
        var commonBind = f.commonBind;

        arrow();
        simulationArrow();
        common();
        commonThat();
        commonBind();
    })();
}


// demo 17, "this" in "=>function"
var isDemo17Run = false;
if (isDemo17Run) {
    (function demo17() {
        var tmpObj = {
            foo: 'test',
            bar: function () {
                console.log(this.foo);
            },
//            arrow: () => {console.log(this.foo);}
            arrow: () => console.log(this.foo)
        };

        tmpObj.bar();
        tmpObj.arrow();
    })();
}


// demo 18, value vs reference
var isDemo18Run = false;
if (isDemo18Run) {
    (function () {
        // #1 pass value
        console.log('test string:');
        var srcStr = 'init1';
        var str = srcStr;
        srcStr = 'ini2';
        console.log(`source string ${srcStr}, target string ${str}`);

        // #2 pass value
        console.log('\ntest function:');
        var srcFn = function () {
            console.log('print ini3');
        };
        var tmpFn = srcFn;
        srcFn = function () {
            console.log('print ini4');
        };
        tmpFn();
        srcFn();

        // #3 pass value
        console.log('\ntest function:');
        var person = {
            name: 'Tom',
            age: 25
        };
        person.say = function () {
            console.log(`my name is ${this.name} and age ${this.age}`);
        };
        var fnSay = person.say;
        person.say = function () {
            console.log(`name => ${this.name}, age => ${this.age}`);
        };
        fnSay.call(person);

        // #4 pass reference
        console.log('\ntest object:');
        var skillJS = {
            name: 'JavaScript',
            level: 2
        };
        var s = skillJS;
        skillJS.name = 'javascript';
        console.log('skill name', s.name);
    })();
}


// demo 19, arrow function
var isDemo19Run = false;
if (isDemo19Run) {
    (function () {
        // #1, arguments from parent
        console.log('test arguments in arrow function:');
        function foo() {
            return () => console.log('arg:', arguments[0]);
        }

        foo(1, 2)('a', 'b');

        // #2, no domain in object block
        console.log('\ntest arrow function in object:');
        let obj = {
            foo: 'test',
            fnArrow: () => console.log(this.foo),
            fnCommon: function () {
                console.log(this.foo);
            }
        };
        obj.fnArrow(); // undefined
        obj.fnCommon();

        // #3, construct create a sub domain
        console.log('\ntest arrow func in construct:');
        function Bar() {
            var that = this;
            this.arrow = () => {
                console.log(this.name);
            };
            this.simulationArrow = () => {
                console.log(that.name);
            };
            this.common = function () {
                console.log(this.name);
            }
        }

        var b = new Bar();
        b.name = 'local';

        console.log('in function sub domain:');
        b.arrow();
        b.simulationArrow();
        b.common();

        var arrow = b.arrow;
        var simulationArrow = b.simulationArrow;
        var common = b.common;

        console.log('in windows domain:');
        arrow();
        simulationArrow();
        common(); // undefined
        common.apply(b);

        // #4, no domain in if block
        console.log('\ntest access var defined in if block:');
        var myBool = true;
        if (myBool) {
            var ifVar = 'var_in_if';
        }
        console.log('var in if block:', ifVar);
    })();
}


console.log(__filename, 'DONE.');
