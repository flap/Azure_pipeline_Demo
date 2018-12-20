/**
 * Created by zhengjin on 2016/11/2.
 *
 * Refer to https://github.com/alsotang/node-lessons/tree/master/lesson6
 * Lib: mocha, should, istanbul
 *
 * Unit test: test function fibonacci() of main.js
 *
 * ENV:
 * "npm install mocha -g", run command "mocha" in global ENV.
 * "npm i istanbul -g", run command "istanbul cover _mocha" to get the code coverage.
 *
 * Run command:
 * 1) Global: mocha  # run test cases in .\test default.
 * 2) Local with opts: .\node_modules\.bin\mocha --opts .\test\mocha.opts
 * Note: bin file at .\node_modules\.bin\ but NOT .\node_modules\mocha\bin\
 *
 * Options:
 * -s, slow
 * -t, timeout
 * --opts <path>
 *
 */
var main = require('./../main');
var should = require('should');

describe('test/main.test.js', function () {
    describe('test equal.', function () {
        it('should equal 0 when n === 0', function () {
            main.fibonacci(0).should.equal(0);
        });

        it('should equal 1 when n === 1', function () {
            main.fibonacci(1).should.equal(1);
        });

        it('should equal 55 when n === 10', function () {
            main.fibonacci(10).should.equal(55);
        });
    });

    describe('test not equal.', function () {
        it('should throw when n > 10', function () {
            (function () {
                main.fibonacci(11);
            }).should.throw('n should <= 10');
        });

        it('should throw when n < 0', function () {
            (function () {
                main.fibonacci(-1);
            }).should.throw('n should >= 0');
        });

        it('should throw when n is not Number', function () {
            (function () {
                main.fibonacci('a');
            }).should.throw('n should be a Number');
        });
    });
});
