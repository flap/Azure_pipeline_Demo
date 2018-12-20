/**
 * Created by zhengjin on 2016/12/22.
 *
 * Mock the weather API resource data for version 2.
 * Url: http://card.tv.funshion.com/api/rest/tv/weather/get
 */

var fs = require('fs');

var common = require('./mock_common');
var commWeatherTypes = common.weatherTypes;

var mockedWeatherRespData = {
    data: {
        city: '北京',
        cityId: '101010100',
        forecast: [],
        history: [],
        today: {}
    },
    retCode: '200',
    retMsg: 'ok'
};

var forecastSize = 5;

var getDateArr = function () {
    var retDateArr = [];
    var dayByMilli = 24 * 60 * 60 * 1000;

    var myDate = new Date();
    retDateArr.push(myDate.toLocaleDateString());  // today

    for (var idx = 1, curDateTime = myDate.getTime(); idx <= forecastSize; idx++) {
        retDateArr.push(new Date(curDateTime + (idx * dayByMilli)).toLocaleDateString());
    }  // forecast

    return retDateArr;
};

var weatherTypeSunny = commWeatherTypes.SUNNY;
var initForecastDataEle = function (forecastDate) {
    return {
        date: forecastDate,
        fengLi: '微风级',
        fengXiang: '无持续风向',
        highTemp: '25',
        lowTemp: '15',
        type: weatherTypeSunny
    };
};

var initTodayDataEle = function (todayDate) {
    return {
        aqi: '60',
        curTemp: '20',
        date: todayDate,
        fengLi: '微风级',
        fengXiang: '无持续风向',
        highTemp: '25',
        lowTemp: '15',
        times: null,
        type: weatherTypeSunny
    };
};

var initWeatherRespData = function () {
    var dateArr = getDateArr();
    var dataElement = mockedWeatherRespData.data;
    var forecastArr = dataElement.forecast;

    for (var idx = 0, length = (forecastSize + 1); idx < length; idx++) {
        if (idx === 0) {
            dataElement.today = initTodayDataEle(dateArr[idx]);
        }
        forecastArr.push(initForecastDataEle(dateArr[idx]));
    }
};

var updateWeatherRespData = function () {
    // do update here, or update weather_resp_data.data directly.
    var dataElement = mockedWeatherRespData.data;
    dataElement.today.type = commWeatherTypes.CLOUDY;
};

var getMockedWeatherRespData = function () {
    initWeatherRespData();
    updateWeatherRespData();
    return JSON.stringify(mockedWeatherRespData);
};


module.exports = getMockedWeatherRespData;

if (require.main === module) {
    console.log(getMockedWeatherRespData());
    console.log(__filename, 'DONE!');
}
