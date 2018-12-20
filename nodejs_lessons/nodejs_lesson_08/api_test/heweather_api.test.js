/**
 * Created by zhengjin on 2016/12/14.
 *
 * Test weather api for http://apis.baidu.com/heweather/weather/free?city=wuhan
 */
var agent = require('superagent');
var fs = require('fs');
var should = require('should');
var common = require('./common_test_api');

var url = 'http://apis.baidu.com/heweather/weather/free?city=';
var curDate = common.getCurrentDate();

var testHeweatherApi = function (cityName) {
    describe('Verify weather api from heweather for city: ' + cityName.nameEn, function () {
        var respBodyObject;

        it('verify response status code is 200', function (done) {
            agent.get(url + cityName.nameEn)
                .set('apikey', '7705cca8df9fb3dbe696ce2310979a62')
                .end(function (err, content) {
                    should.not.exist(err);
                    content.statusCode.should.equal(200);
                    respBodyObject = JSON.parse(content.text);
                    done();
                })
        });

        it('verify response body.', function () {
            var respItemObject = respBodyObject['HeWeather data service 3.0'][0];
            respItemObject['status'].should.equal('ok');
            respItemObject['basic']['city'].should.equal(cityName.nameCn);
            respItemObject['daily_forecast'].length.should.greaterThanOrEqual(5);
            respItemObject['daily_forecast'][0]['date'].should.equal(curDate);
            should.exist(respItemObject['now']);
        });
    });
};


// main test
(function () {
    var pathForMocha = './data_test/city_list_test.txt';
    var cityNames = common.getCityList(pathForMocha, common.cityType.byName);
    cityNames.forEach(function (ele, idx) {
        testHeweatherApi(ele);
    })
})();
