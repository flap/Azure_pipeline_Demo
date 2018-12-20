/**
 * Created by zhengjin on 2016/12/12.
 *
 * These test cases are included, config in mocha.opts.
 *
 */
var should = require('should');

describe('zj_test/zj_demo_02.test.js', function () {
    var staticVar;

    before(['before all'], function () {
        console.log('run before all');
        staticVar = 0;
    });

    after(['after all'], () => {
        console.log(('run after all'));
    });

    beforeEach('before each', function () {
        console.log('run before each');
    });

    afterEach('after each', () => {
        console.log('run after each');
    });

    describe('test update static variable', function () {
        it('test static variable init', () => {
            console.log('static var: ' + staticVar);
            staticVar = 10;
        });

        it('test static variable updated', () => {
            console.log('static var: ' + staticVar);
        });
    });

    describe('test command option -s and -t', function () {
        it('test -s tag, and set time delay (async)', (done) => {
            setTimeout(() => {
                console.log('set timeout at 1500 Millisecond');
                done();
            }, 1500);
        });

        it('test -t tag, and set time delay (async)', (done) => {
            setTimeout(() => {
                console.log('set timeout at 3000 Millisecond');
                done();
            }, 3000);
        });
    });
});