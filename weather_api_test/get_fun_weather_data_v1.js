/**
 * Created by zhengjin on 2016/11/28.
 *
 * Get weather from FUN json api.
 */

var agent = require('superagent');
var comm = require('./common');

var isLog = comm.runProfiles.isLog;

var getFunWeatherDataV1 = function (cityId) {
    return new Promise(function (resolve) {
        console.log("\nSTART get weather data for " + cityId + " from FUN api v1.");

        agent.get('http://card.tv.funshion.com/weather/city')
            .query('plat_type=funtv&version=2.8.0.8_s&sid=FD5551A-SU&mac=28:76:CD:01:96:F6')
            .query('random=1483946026114266&sign=f56d8ebc07bd370101f06b2d84be0e2f')
            .query('province=&city=&area=&cityId=' + cityId)
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                    return;
                }

                var weatherDataFun = [];

                // get today weather data
                var jsonRespData = JSON.parse(resp.text).data;
                var itemToday = jsonRespData['today'];
                weatherDataFun.push({
                    date: itemToday['date'],
                    type: itemToday['type'],
                    temp: comm.getNumFromTemp(itemToday['lowtemp']) + '/'
                        + comm.getNumFromTemp(itemToday['hightemp']),
                    curTemp: itemToday['curTemp'],
                    wind: itemToday['fengxiang'] + '/' + itemToday['fengli']
                });

                // get forecast weather data
                jsonRespData['forecast'].forEach(function (element) {
                    weatherDataFun.push({
                        date: element['date'],
                        type: element['type'],
                        temp: comm.getNumFromTemp(element['lowtemp']) + '/'
                            + comm.getNumFromTemp(element['hightemp']),
                        wind: element['fengxiang'] + '/' + element['fengli']
                    });
                });

                if (isLog) {
                    console.log('Weather data for ' + cityId + ' from FUN API:');
                    weatherDataFun.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }

                resolve(weatherDataFun);
            });
    });
};


module.exports = getFunWeatherDataV1;

if (require.main === module) {
    isLog = true;
    console.log('Start Promise...');

    getFunWeatherDataV1('101010100').then(function (resolve) {
        console.log('Count: ' + resolve.length);
    }).catch(function (err) {
        console.error(err);
    });

    console.log(__filename, 'DONE!');
}
