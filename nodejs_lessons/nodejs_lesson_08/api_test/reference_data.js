/**
 * Created by zhengjin on 2016/12/8.
 *
 * Reference data for weather data.
 */

var formatArr = {
    fa: '图片1', fb: '图片2',
    fc: '温度1', fd: '温度2',
    fe: '风向1', ff: '风向2',
    fg: '风力1', fh: '风力2', fi: '日出日落'};

var weatherArr = {
    '00': '晴', '01': '多云', '02': '阴', '03': '阵雨', '04': '雷阵雨', '05': '雷阵雨伴有冰雹',
    '06': '雨夹雪', '07': '小雨', '08': '中雨', '09': '大雨', '10': '暴雨',
    '11': '大暴雨', '12': '特大暴雨', '13': '阵雪', '14': '小雪', '15': '中雪',
    '16': '大雪', '17': '暴雪', '18': '雾', '19': '冻雨', '20': '沙尘暴',
    '21': '小到中雨', '22': '中到大雨', '23': '大到暴雨', '24': '暴雨到大暴雨', '25': '大暴雨到特大暴雨',
    '26': '小到中雪', '27': '中到大雪', '28': '大到暴雪', '29': '浮尘', '30': '扬沙',
    '31': '强沙尘暴', '53': '霾', '99': ''};

var fxArr = {'0': '无持续风向', '1': '东北风', '2': '东风', '3': '东南风', '4': '南风', '5': '西南风',
    '6': '西风', '7': '西北风', '8': '北风', '9': '旋转风'};

var flArr = {'0': '微风', '1': '3-4级', '2': '4-5级', '3': '5-6级', '4': '6-7级', '5': '7-8级',
    '6': '8-9级', '7': '9-10级', '8': '10-11级', '9': '11-12级'};

module.exports = {
    tagType: formatArr,
    weatherType: weatherArr,
    windDirType: fxArr,
    windForceType: flArr
};


if (require.main == module) {
    (function () {
        // format weather data element
        var dataEle = { fa: '01',
            fb: '01',
            fc: '24',
            fd: '16',
            fe: '2',
            ff: '4',
            fg: '0',
            fh: '0',
            fi: '06:17|17:37' };

        var tmp = {};
        for (var attr in dataEle) {
            if (dataEle.hasOwnProperty(attr)) {
                tmp[formatArr[attr]] = dataEle[attr];
            }
        }

        tmp['图片1'] = weatherArr[tmp['图片1']];
        tmp['图片2'] = weatherArr[tmp['图片2']];
        tmp['风向1'] = fxArr[tmp['风向1']];
        tmp['风向2'] = fxArr[tmp['风向2']];
        tmp['风力1'] = flArr[tmp['风力1']];
        tmp['风力2'] = flArr[tmp['风力2']];

        console.log(tmp);
    })();

    console.log(__filename, 'DONE.');
}
