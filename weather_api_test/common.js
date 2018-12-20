/**
 * Created by zhengjin on 2016/11/28.
 *
 * Define the common utils and run profiles.
 */

var weatherTypesMap = {
    '0': 'SUNNY(晴)',
    '1': 'CLOUDY(多云)',
    '2': 'OVERCAST(阴)',
    '3': 'SHOWER(阵雨)',
    '4': 'THUNDER_SHOWER(雷阵雨)',
    '5': 'THUNDER_SHOWER_WITH_HAI(雷阵雨并伴有冰雹)',
    '6': 'SLEET:(雨夹雪)',
    '7': 'LIGHT_RAIN(小雨)',
    '8': 'MODERATE_RAIN(中雨)',
    '9': 'HEAVY_RAIN(大雨)',
    '10': 'STORM(暴雨)',
    '11': 'HEAVY_STORM(大暴雨)',
    '12': 'SEVERE_STORM(特大暴雨)',
    '13': 'SNOW_FLURRY(阵雪)',
    '14': 'LIGHT_SNOW(小雪)',
    '15': 'MODERATE_SNOW(中雪)',
    '16': 'HEAVY_SNOW(大雪)',
    '17': 'SNOWSTORM(暴雪)',
    '18': 'FOGGY(雾)',
    '19': 'ICE_RAIN(冻雨)',
    '20': 'DUSTSTORM(沙尘暴)',
    '21': 'LIGHT_TO_MODERATE_RAIN(小到中雨)',
    '22': 'MODERATE_TO_HEAVY_RAIN(中到大雨)',
    '23': 'HEAVY_RAIN_TO_STORM(大到暴雨)',
    '24': 'STORM_TO_HEAVY_STORM(暴雨到大暴雨)',
    '25': 'HEAVY_TO_SEVERE_STORM(大暴雨到特大暴雨)',
    '26': 'LIGHT_TO_MODERATE_SNOW(小到中雪)',
    '27': 'MODERATE_TO_HEAVY_SNOW(中到大雪)',
    '28': 'HEAVY_SNOW_TO_SNOWSTORM(大到暴雪)',
    '29': 'DUST(浮尘)',
    '30': 'SAND(扬沙)',
    '31': 'SANDSTORM(强沙尘暴)',
    '53': 'HAZE(霾)',
    '99': 'NONE(无)'
};

var getWeatherTypeNameFromCode = function (number) {
    var retType = weatherTypesMap[number.toString()];
    if (retType) {
        return retType;
    }
    return 'NONE(无)';
};

var getNumberFromTemp = function (temp) {
    var re = /(-?\d+)℃?/;
    var result = re.exec(temp);
    if (result) {
        return result[1];
    }
    return 'null';
};


module.exports = {
    runProfiles: {
        isLog: false
    },
    getNumFromTemp: getNumberFromTemp,
    getWeatherType: getWeatherTypeNameFromCode
};
