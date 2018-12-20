/**
 * Created by zhengjin on 2016/12/6.
 *
 * Async invoke by using bluebird.
 */

var Blpromise = require('bluebird');
var fs = Blpromise.promisifyAll(require('fs'));

fs.readFileAsync('./data.txt', 'utf8').then(function (content) {
    console.log('Success read async, content: ');
    console.log(content);
}).catch(SyntaxError, function (e) {
    console.error(e.message);
}).catch(Blpromise.OperationalError, function (e) {
    console.error("unable to read file, because: ", e.message);
}).catch(reason => console.log(reason));

console.log('bluebird demo ...');
