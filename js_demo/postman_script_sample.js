///**
//* Test script for Yahoo, create at 2016/12/21
//* Url: https://query.yahooapis.com/v1/public/yql
//*
//*/
//
//var testTag = '<ZJTest> ';
//
//var getReqCityName = function() {
//    var reCn = /text%3D%22(.+)%22\)/;
//    var reEn = /cityEn=(.+)/;
//    var resqArr = request.url.split('?')[1].split('&');
//    return {
//        cityCn: reCn.exec(resqArr[0])[1],
//        cityEn: reEn.exec(resqArr[2])[1]
//    };
//};
//var reqCityName = getReqCityName();
//
//var getCurrentDateAsYaHoo = function () {
//    var monthArr = ['Jun', 'Fre', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//    var myDate = new Date();
//    var dateItems = [myDate.getDate(), monthArr[myDate.getMonth()], myDate.getFullYear()];
//    return dateItems.join(' ');
//};
//
//
//// schema definition
//var schema = {
//    "$schema": "http://json-schema.org/draft-04/schema#",
//    "title": "YaHoo Weather API check",
//    "type": "object",
//    "properties": {
//        "query": {
//            "type": "object",
//            "properties": {
//                "count": {
//                    "type": "integer",
//                    "minimum": 1,
//                    "maximum": 1
//                },
//                "results": {
//                    "type": "object",
//                    "properties": {
//                        "channel": {
//                            "type": "object",
//                            "properties": {
//                                "location": {
//                                    "type": "object",
//                                    "properties": {
//                                        "city": {
//                                            "type": "string"
//                                        }
//                                    },
//                                    "required": ["city"]
//                                },
//                                "wind": {
//                                    "type": "object"
//                                },
//                                "item": {
//                                    "type": "object",
//                                    "properties": {
//                                        "condition": {
//                                            "type": "object",
//                                            "properties": {
//                                                "date": {
//                                                    "type": "string"
//                                                },
//                                                "temp": {
//                                                    "type": "string"
//                                                },
//                                                "text": {
//                                                    "type": "string"
//                                                }
//                                            },
//                                            "required": ["date", "temp", "text"]
//                                        },
//                                        "forecast": {
//                                            "type": "array",
//                                            "items": {
//                                                "type": "object",
//                                                "properties": {
//                                                    "date": {
//                                                        "type": "string"
//                                                    },
//                                                    "high": {
//                                                        "type": "string",
//                                                        "pattern": "-?[0-9]+"
//                                                    },
//                                                    "low": {
//                                                        "type": "string",
//                                                        "pattern": "-?[0-9]+"
//                                                    },
//                                                    "text": {
//                                                        "type": "string"
//                                                    }
//                                                },
//                                                "required": ["date", "high", "low", "text"]
//                                            },
//                                            "minItems": 5
//                                        }
//                                    },
//                                    "required": ["condition", "forecast"]
//                                }
//                            },
//                            "required": ["location", "wind", "item"]
//                        }
//                    },
//                    "required": ["channel"]
//                }
//            },
//            "required": ["count", "results"]
//        }
//    },
//    "required": ["query"]
//};
//
//
//console.log('Verify for city: ' + reqCityName.cityCn);
//
//// verify resp info
//tests['Status code is 200'] = (responseCode.code === 200);
//
//var testRespTime = (responseTime < 5000);
//tests['Response time is less than 5000ms'] = testRespTime;
//if (!testRespTime) {
//    console.error(testTag + 'Actual response time: ' + responseTime);
//}
//
//
//// schema validate
//respJsonObject = JSON.parse(responseBody);
//
//testRespJsonValid = tv4.validate(respJsonObject, schema);
//tests['Validate response body by schema'] = testRespJsonValid;
//if (!testRespJsonValid) {
//    console.error(tv4.error.message);
//    return;  // if failed, skip following checkpoints
//}
//
//
//// verify resp body basic info
//var respBody = respJsonObject.query.results.channel;
//tests['Response body, location, city'] = (respBody.location.city.toLowerCase() === reqCityName.cityEn.toLowerCase());
//
//
//var respItem = respBody.item;
//var respCur = respItem.condition;
//tests['Response body, current tmp'] = respCur.temp < 100;
//tests['Response body, current type'] = respCur.text.length > 0;
//
//
//// verify resp body forecast info
//var respForecastCur = respItem.forecast[0];
//
//var testRespForecastCurDate = (respForecastCur.date === getCurrentDateAsYaHoo());
//tests['Response body, forecast, cur date'] = testRespForecastCurDate;
//if (!testRespForecastCurDate) {
//    console.error(testTag + 'Expected cur date: ' + getCurrentDateAsYaHoo() + ' Actual cur date: ' + respForecastCur.date);
//}
//
//
//var highTmp = respForecastCur.high;
//var lowTmp = respForecastCur.low;
//var testRespForecastCurTmp = (parseInt(highTmp) > parseInt(lowTmp));
//tests['Response body, forecast, cur tmp'] = testRespForecastCurTmp;
//if (!testRespForecastCurTmp) {
//    console.error(testTag + 'High tmp: ' + highTmp + ' Low tmp: ' + lowTmp);
//}
//
//
//// end