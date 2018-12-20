/**
 * Created by zhengjin on 2016/12/8.
 *
 * Verify weather data api from http://wthrcdn.etouch.cn/WeatherApi?citykey={value}
 *
 */

var util = require('util');
var fs = require('fs');
var agent = require('superagent');
var co = require('co');
var xml2js = require('xml2js');

var common = require('./common_test_api');

var getWeatherXmlData = function (url) {
    return new Promise(function (resolve) {
        agent.get(url).end(function (err, content) {
            if (err) {
                console.error(err);
            }
            resolve(content.text);
        })
    });
};

var parseWeatherXmlData = function (xmlData) {
    return new Promise(function (resolve) {
        var parser = new xml2js.Parser();
        parser.parseString(xmlData, function (err, result) {
            if (err) {
                console.error(err);
            }

            var retJson = {
                today: {},
                forecast: []
            };

            var respXml = result['resp'];
            retJson.today = buildTodayDataFromXml(respXml);

            var forecastXmlArr = respXml['forecast'][0]['weather'];
            forecastXmlArr.forEach(function (element) {
                retJson.forecast.push(buildForecastDataFromXml(element));
            });

            resolve(retJson);
        })
    });
};

var buildTodayDataFromXml = function (respXml) {
    return {
        city: respXml['city'][0],
        tmp: respXml['wendu'][0],
        windDirection: respXml['fengxiang'][0],
        windForce: respXml['fengli'][0],
        updateTime: respXml['updatetime'][0]
    };
};

var buildForecastDataFromXml = function (xmlEle) {
    var tmpDayEle = xmlEle['day'][0];
    return {
        date: xmlEle['date'][0],
        highTmp: xmlEle['high'][0],
        lowTmp: xmlEle['low'][0],
        type: tmpDayEle['type'][0],
        windDirection: tmpDayEle['fengxiang'][0],
        windForce: tmpDayEle['fengli'][0]
    };
};

var createUrlsArr = function () {
    return new Promise(function (resolve) {
        var pathByNode = './../data_test/city_list_test.txt';
        var urlTemplate = 'http://wthrcdn.etouch.cn/WeatherApi?citykey=';
        var retUrls = [];

        common.getCityList(pathByNode, common.cityType.byId).forEach((ele, idx) => {
            retUrls.push(urlTemplate + ele);
        });
        resolve(retUrls);
    });
};


if (require.main === module) {
    var profileTag = 'WeatherDataApiTestProfile';
    console.time(profileTag);

    co(function* () {
        var urlsArr = yield createUrlsArr();
        var totalCities = urlsArr.length;
        console.log('Total cities: ' + totalCities);

        for (var idx = 0; idx < totalCities; idx++) {
            console.log(util.format('Run at %d cities.', (idx + 1)));
            try {
                var retXmlData = yield getWeatherXmlData(urlsArr[idx]);
                var retData = yield parseWeatherXmlData(retXmlData);
                console.log(JSON.stringify(retData));
            }
            catch (e) {
                console.error('Error when request data for ' + urlsArr[idx]);
                console.error(e.message);
            }
            console.log(yield common.timeDelay(1000));
        }

        console.timeEnd(profileTag);
        console.log(__filename, 'DONE.');
    }).catch(function (err) {
        console.error(err.stack);
    });
}
