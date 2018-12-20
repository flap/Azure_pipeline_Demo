/**
 * Created by zhengjin on 2016/11/30.
 *
 * Mocked response data as Fun weather API.
 */

var path = require('path');
var fs = require('fs');
var comm = require('./mock_common');
var mockWeatherFns = require('./mock_weather_fns');

var express = require('express');
var app = express();

var numDataSaved = 0;
var timeDelay = 200;


app.route('/').get(function (req, res) {
    res.send('Mock API Project. Access <b>index.html</b> to get the mocked APIs list.');
});

app.route('/weather_v1').get(function (req, res) {
    sendRespData(req, res, comm.weatherDataFilePath.v1, timeDelay);
});

app.route('/weather_v2').get(function (req, res) {
    sendRespData(req, res, comm.weatherDataFilePath.v2, timeDelay);
});

app.use(express.static(path.join(__dirname, 'public')))
    .listen(3000, function () {
        initData();
        console.log('Mock api application is running at port 3000.');
    });


var initData = function () {
    dumpWeatherRespData(comm.appVersionNum.v1);
    dumpWeatherRespData(comm.appVersionNum.v2);
};

var dumpWeatherRespData = function (version) {
    if (version === 1) {
        writeFileContent(comm.weatherDataFilePath.v1, mockWeatherFns.v1());
    } else {  // version === 2
        writeFileContent(comm.weatherDataFilePath.v2, mockWeatherFns.v2());
    }
};

var writeFileContent = function (path, content) {
    fs.writeFile(path, content, function (err) {
        if (err) {
            console.error(err);
        }
        ++numDataSaved;
    });
};

var sendRespData = function (req, res, path, delay) {
    setTimeout(function () {
        if (numDataSaved < 2) {  // check data saved done
            res.send('Data is loading ..., refresh after 5 seconds.');
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                console.error(err);
                res.send('Error in loading response data in file!');
            }
            res.send(updateMockedWeatherRespDataV2FromQuery(data, req.query));
        });
    }, delay);
};

var updateMockedWeatherRespDataV2FromQuery = function (data, query) {
    var queryCityCn = query.city;
    if (!queryCityCn || queryCityCn.length === 0) {
        return data;
    }
    var queryCityId = query.cityId;
    if (!queryCityId || queryCityId.length === 0) {
        return data;
    }

    var respJsonObj = JSON.parse(data);
    var respData = respJsonObj.data;
    if (!respData) {  // fix issue: {data: null}
        return data;
    }

    if (respData.city && respData.cityId) {
        respData.city = queryCityCn;
        respData.cityId = queryCityId;
    }

    return JSON.stringify(respJsonObj);
};
