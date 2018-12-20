/**
 * Created by zhengjin on 2016/12/26.
 *
 * Include common constants.
 */

var weatherTypesMap = {
    SUNNY: 0,// 晴
    CLOUDY: 1,// 多云
    OVERCAST: 2,// 阴
    SHOWER: 3,// 阵雨
    THUNDER_SHOWER: 4,// 雷阵雨
    THUNDER_SHOWER_WITH_HAI: 5,// 雷阵雨并伴有冰雹
    SLEET: 6,// 雨夹雪
    LIGHT_RAIN: 7,// 小雨
    MODERATE_RAIN: 8,// 中雨
    HEAVY_RAIN: 9,// 大雨
    STORM: 10,// 暴雨
    HEAVY_STORM: 11,// 大暴雨
    SEVERE_STORM: 12,// 特大暴雨
    SNOW_FLURRY: 13,//阵雪
    LIGHT_SNOW: 14,// 小雪
    MODERATE_SNOW: 15,// 中雪
    HEAVY_SNOW: 16,// 大雪
    SNOWSTORM: 17,// 暴雪
    FOGGY: 18,// 雾
    ICE_RAIN: 19,// 冻雨
    DUSTSTORM: 20,// 沙尘暴
    LIGHT_TO_MODERATE_RAIN: 21,// 小到中雨
    MODERATE_TO_HEAVY_RAIN: 22,// 中到大雨
    HEAVY_RAIN_TO_STORM: 23,// 大到暴雨
    STORM_TO_HEAVY_STORM: 24,// 暴雨到大暴雨
    HEAVY_TO_SEVERE_STORM: 25,// 大暴雨到特大暴雨
    LIGHT_TO_MODERATE_SNOW: 26,// 小到中雪
    MODERATE_TO_HEAVY_SNOW: 27,// 中到大雪
    HEAVY_SNOW_TO_SNOWSTORM: 28,// 大到暴雪
    DUST: 29,// 浮尘
    SAND: 30,// 扬沙
    SANDSTORM: 31,// 强沙尘暴
    HAZE: 53,// 霾
    NONE: 99// 无
};


module.exports = {
    weatherTypes: weatherTypesMap,
    weatherDataFilePath: {
        v1: './private/weather_resp_data_v1.data',
        v2: './private/weather_resp_data_v2.data'
    },
    appVersionNum: {
        v1: 1,
        v2: 2
    }
};
