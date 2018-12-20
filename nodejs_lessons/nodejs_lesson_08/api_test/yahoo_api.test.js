/**
 * Created by zhengjin on 2016/12/12.
 *
 * Test YaHoo weather api by using Mocha framework.
 * Config in test/mocha.opts
 */

var agent = require('superagent');
var fs = require('fs');
var should = require('should');
var common = require('./common_test_api');

var buildUrl = function (cityName) {
    var yahooUrl = 'https://query.yahooapis.com/v1/public/yql?';
    var yahooArgYql = 'q=select%20*%20from%20weather.forecast%20' +
        'where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'
        + cityName + '%22)%20and%20u%3D%22c%22';
    var yahooArgFormat = '&format=json';

    return yahooUrl + yahooArgYql + yahooArgFormat;
};

var getCurrentDateAsYaHoo = function () {
    var monthArr = ['Jun', 'Fre', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var myDate = new Date();
    var dateItems = [myDate.getDate(), monthArr[myDate.getMonth()], myDate.getFullYear()];
    return dateItems.join(' ');
};

var testYaHooApi = function (cityName) {
    describe('Verify YaHoo weather data for city ' + cityName, function () {
        var respBodyObject;

        it('test response status code is 200', function (done) {
            agent.get(buildUrl(escape(cityName))).end((err, content) => {
                should.not.exist(err);
                content.statusCode.should.equal(200);
                respBodyObject = JSON.parse(content.text);
                done();
            });
        });

        it('test response body', function () {
            respBodyObject.should.have.property('query');
            respBodyObject['query']['count'].should.equal(1);

            var respItemObject = respBodyObject['query']['results']['channel']['item'];
            respItemObject['title'].length.should.greaterThan(1);
            respItemObject['forecast'].length.should.greaterThanOrEqual(5);
            respItemObject['forecast'][0]['date'].should.equal(getCurrentDateAsYaHoo());
        });
    });
};


// main test
(function () {
    var pathForMocha = './data_test/city_list_test.txt';
    common.getCityList(pathForMocha, common.cityType.byNameCn)
        .forEach(function (ele, idx) {
            testYaHooApi(ele);
        });
})();
