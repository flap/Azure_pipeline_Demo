/**
 * Created by zhengjin on 2016/11/18.
 *
 * Compare the weather data from FUN api and crawl from weather.com (GOV).
 */

var co = require('co');

var getFunDataV1 = require('./get_fun_weather_data_v1');
var getFunDataV2 = require('./get_fun_weather_data_v2');
var GovWeatherData = require('./get_gov_weather_data');


var compareWeatherDataByCon = function (cityId) {
    console.log('Start Promise, compare weather data by concurrent...');
    Promise.all([getFunDataV1(cityId), GovWeatherData.getForecastWeaData(cityId)])
        .then(function (result) {
            console.log(result[0].length);
            console.log(result[1].length);
            console.log('\nCOMPARE DONE!');
        }).catch(function (reason) {
            console.error(reason);
        });
};

var compareForecastWeatherDataBySeq = function (cityArr) {
    co(function* () {
        'use strict';
        var cityArrTest = cityArr;

        // note: cannot use forEach() instead of for iterator
        for (let idx = 0, length = cityArrTest.length; idx < length; idx++) {
            let cityId = cityArrTest[idx];
            console.log('\n\nCOMPARE FORECAST WEATHER DATA FOR: ' + cityId);

            let funWeaData = yield getFunDataV2(cityId);
            funWeaData.forecast.forEach(function (element) {
                console.log(JSON.stringify(element));
            });

            let govWeaData = yield GovWeatherData.getForecastWeaData(cityId);
            govWeaData.forEach(function (element) {
                console.log(JSON.stringify(element));
            });
        }

        console.log('\nCOMPARE DONE!');
    }).catch(function (err) {
        console.error(err);
    });
};

var compareTodayWeatherDataBySeq = function (cityArr) {
    co(function* () {
        'use strict';
        var cityArrTest = cityArr;

        for (let idx = 0, length = cityArrTest.length; idx < length; idx++) {
            let cityId = cityArrTest[idx];
            console.log('\n\nCOMPARE TODAY WEATHER DATA FOR: ' + cityId);

            let funWeaData = yield getFunDataV2(cityId);
            console.log(JSON.stringify(funWeaData.today));

            logGovTodayWeaData(yield GovWeatherData.getTodayWeaData(cityId));
        }

        console.log('\nCOMPARE DONE!');
    }).catch(function (err) {
        console.error(err);
    });
};

var logGovTodayWeaData = function (weaData) {
    console.log('\nCurrent weather data: ' + JSON.stringify(weaData.weaData));
    console.log('\nWeather data per 3 hours: ');
    weaData.per3HoursWeaData.forEach(function (element) {
        console.log(JSON.stringify(element));
    });
    console.log('\nThe 24 hours air data: ');
    weaData.air24HourWeaData.forEach(function (element) {
        console.log(JSON.stringify(element));
    });
};


if (require.main === module) {
    // TODO: read from file, 2016/12/30
    var cityArr = ['101010100', '101020100', '101030100', '101040100', '101200101'];

    const runTypeByCon = 1;
    const runTypeBySeqForToday = 2;
    const runTypeBySeqForForecast = 3;

    switch (runTypeBySeqForForecast) {
        case runTypeByCon:
            compareWeatherDataByCon('101010100');
            break;
        case runTypeBySeqForToday:
            compareTodayWeatherDataBySeq(cityArr);
            break;
        case runTypeBySeqForForecast:
            compareForecastWeatherDataBySeq(cityArr);
            break;
        default:
            compareTodayWeatherDataBySeq(cityArr);
    }
}
