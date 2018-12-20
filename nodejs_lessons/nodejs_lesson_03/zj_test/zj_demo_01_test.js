/**
 * Created by zhengjin on 2016/12/12.
 *
 * Config in mocha.opts to run tests from directory zj_test.
 * These test cases are excluded.
 *
 */
var should = require('should');

describe('zj_test/zj_demo_01_test.js', function () {
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

    it('test static variable init', () => {
        console.log('static var: ' + staticVar);
        staticVar = 10;
    });

    it('test static variable updated', () => {
        console.log('static var: ' + staticVar);
    });
});
