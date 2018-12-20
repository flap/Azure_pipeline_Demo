/**
 * Created by zhengjin on 2017/4/1.
 *
 * A demo handle with gbk encode text.
 * Nodejs script is utf8 encode.
 */

var fs = require('fs');
var iconv = require('iconv-lite');

var printLog = console.log;

// 1.1 read as binary buffer, and decode with gbk
var readBuffer1 = Buffer.from(fs.readFileSync('d:\\js_encode_ts.txt', {encoding: 'binary'}), 'binary');
printLog(readBuffer1);  // buffer

// gbk butter to utf8 string
var text1 = iconv.decode(readBuffer1, 'gbk');
printLog(typeof(text1));
printLog(text1);

// 1.2 encode as gbk, and write as binary
fs.writeFile('d:\\js_encode_ts_gbk.txt', iconv.encode(text1, 'gbk'), 'binary', function (err) {
    if (err) printLog(err);
});


// 2.1 read as buffer, and decode with gbk
var readBuffer2 = fs.readFileSync('d:\\js_encode_ts.txt');
printLog(readBuffer2);

var text2 = iconv.decode(readBuffer2, 'gbk');
printLog(typeof(text2));
printLog(text2);

// 2.2 write as utf8
fs.writeFile('d:\\js_encode_ts_utf8.txt', text2, function (err) {
    if (err) printLog(err);
});

// end