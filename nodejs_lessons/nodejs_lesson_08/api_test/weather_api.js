/**
 * Created by zhengjin on 2016/12/8.
 *
 * Test weather data api.
 * today url: http://www.weather.com.cn/data/sk/city_id.html
 * forecast url: http://mobile.weather.com.cn/data/forecast/city_id.html
 */
var util = require('util');
var fs = require('fs');
var agent = require('superagent');
var co = require('co');

var common = require('./common_test_api');
var reference = require('./reference_data.js');

var getForecastData = function (url) {
    return new Promise(function (resolve) {
        agent.get(url).end(function (err, content) {
            if (err) {
                console.error(err);
            }

            var retForecastArr = [];
            var contentObj = JSON.parse(content.text);
            var forecastArr = contentObj.f['f1'];
            for (var i = 0, length = forecastArr.length; i < length; i++) {
                retForecastArr.push(formatForecastElement(forecastArr[i]));
            }
            resolve(retForecastArr);
        });
    });
};

var formatForecastElement = function (element) {
    var tmpEle = {};
    for (var attr in element) {
        if (element.hasOwnProperty(attr)) {
            tmpEle[reference.tagType[attr]] = element[attr];
        }
    }

    tmpEle['图片1'] = reference.weatherType[tmpEle['图片1']];
    tmpEle['图片2'] = reference.weatherType[tmpEle['图片2']];
    tmpEle['风向1'] = reference.windDirType[tmpEle['风向1']];
    tmpEle['风向2'] = reference.windDirType[tmpEle['风向2']];
    tmpEle['风力1'] = reference.windForceType[tmpEle['风力1']];
    tmpEle['风力2'] = reference.windForceType[tmpEle['风力2']];

    return tmpEle;
};

var getTodayData = function (url) {
    return new Promise(function (resolve) {
        agent.get(url).end(function (err, content) {
            if (err) {
                console.error(err);
            }

            var retData = {};
            var infoObj = JSON.parse(content.text)['weatherinfo'];
            retData['city'] = infoObj['city'];
            retData['cityId'] = infoObj['cityid'];
            retData['temp'] = infoObj['temp'];
            retData['WindDirection'] = infoObj['WD'];
            retData['WindForce'] = infoObj['WS'];
            retData['api'] = infoObj['qy'];
            retData['updateTime'] = infoObj['time'];

            resolve(retData);
        });
    });
};

var createUrlsArr = function () {
    return new Promise(function (resolve) {
        var urlTmpToday = 'http://www.weather.com.cn/data/sk/%s.html';
        var urlTmpForecast = 'http://mobile.weather.com.cn/data/forecast/%s.html';

        var retUrls = {
            urlTodayArr: [],
            urlForecastArr: []
        };

        fs.readFile('./../data_test/city_list_test.txt', 'utf8', function (err, data) {
            data.split('\n').forEach(function (element) {
                var cityId = element.split(',')[0];
                retUrls.urlTodayArr.push(util.format(urlTmpToday, cityId));
                retUrls.urlForecastArr.push(util.format(urlTmpForecast, cityId))
            });

            resolve(retUrls);
        })
    });
};


if (require.main === module) {
    var curDate = common.getCurrentDate();

    co(function* () {
        var urlsObj = yield createUrlsArr();
        var totalCities = urlsObj.urlForecastArr.length;
        console.log('Total cities: ' + totalCities);

        try {
            for (var idx = 0; idx < totalCities; idx++) {
                console.log('Run at %d cities.', (idx + 1));
                var retWeatherData = {
                    date: curDate,
                    today: yield getTodayData(urlsObj.urlTodayArr[idx]),
                    forecast: yield getForecastData(urlsObj.urlForecastArr[idx])
                };
                console.log(JSON.stringify(retWeatherData));
                console.log(yield common.timeDelay(3000));
            }
        } catch (e) {
            console.error(e.message);
        }
    }).catch(function (err) {
        console.error(err.stack);
    });
}
