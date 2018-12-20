/**
 * Created by zhengjin on 2016/11/30.
 *
 * Mock the weather API resource data for v1.
 * Url: http://card.tv.funshion.com/weather/city
 */

var mockedWeatherData = {
    data: {
        cacheTime: 0,
        city: '',
        cityid: '101010100',
        forecast: [],
        history: [],
        today: {}
    },
    retCode: '200',
    retMsg: 'ok'
};

var historySize = 7;
var forecastSize = 4;

var formatWeekDay = function (weekDayNum) {
    var cnWeekDayArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return cnWeekDayArr[weekDayNum];
};

var getDateAndWeekArr = function () {
    var dateArr = [];
    var dayByMilli = 24 * 60 * 60 * 1000;
    var curDateTime = new Date().getTime();

    for (var i = historySize; i >= 0; i--) {
        var tmpHistoryDate = new Date(curDateTime - (i * dayByMilli));
        dateArr.push({
            date: tmpHistoryDate.toLocaleDateString(),
            week: formatWeekDay(tmpHistoryDate.getDay())
        });
    }  // include today data

    for (var j = 1; j <= forecastSize; j++) {
        var tmpForecastDate = new Date(curDateTime + (j * dayByMilli));
        dateArr.push({
            date: tmpForecastDate.toLocaleDateString(),
            week: formatWeekDay(tmpForecastDate.getDay())
        });
    }

    return dateArr;
};

var initHistoryDataEle = function (historyDate) {
    return {
        aqi: '60',
        date: historyDate.date,
        fengli: '微风级',
        fengxiang: '无持续风向',
        hightemp: '25℃',
        lowtemp: '15℃',
        type: '晴',
        week: historyDate.week
    };
};

var initForecastDataEle = function (forecastDate) {
    return {
        date: forecastDate.date,
        fengli: '微风级',
        fengxiang: '无持续风向',
        hightemp: '25℃',
        lowtemp: '15℃',
        type: '晴',
        week: forecastDate.week
    };
};

var initTodayDataEle = function (todayDate) {
    return {
        aqi: '60',
        curTemp: '20℃',
        date: todayDate.date,
        fengli: '微风级',
        fengxiang: '无持续风向',
        hightemp: '25℃',
        lowtemp: '15℃',
        times: [],
        type: '晴'
    };
};

var initWeatherData = function () {
    var dateArr = getDateAndWeekArr();

    var dataElement = mockedWeatherData.data;
    var historyArr = dataElement.history;
    var forecastArr = dataElement.forecast;

    for (var idx = 0, length = (historySize + forecastSize + 1); idx < length; idx++) {
        if (idx < historySize) {
            historyArr.push(initHistoryDataEle(dateArr[idx]));
        } else if (idx > historySize) {
            forecastArr.push(initForecastDataEle(dateArr[idx]));
        } else {
            dataElement.today = initTodayDataEle(dateArr[idx]);
        }
    }
};

var updateWeatherData = function () {
    // do update here
    var dataElement = mockedWeatherData.data;
    dataElement.forecast[0].type = '大暴雨';
    dataElement.history = [];  // ignore history
};

var getMockedWeatherData = function () {
    initWeatherData();
    updateWeatherData();
    return JSON.stringify(mockedWeatherData);
};


module.exports = getMockedWeatherData;

if (require.main === module) {
    console.log(getMockedWeatherData());
    console.log(__filename, 'DONE!');
}
