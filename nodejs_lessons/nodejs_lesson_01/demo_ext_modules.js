/**
 * Created by zhengjin on 2017/5/8.
 * Demos use external modules.
 */

// #1, console
var isConsoleDemoRun = false;
if (isConsoleDemoRun) {
    (function () {
        // console.dir()
        function MyTmpObject(name, age) {
            this.name = name;
            this.age = age;
        }

        MyTmpObject.prototype.say = function () {
            console.log("I am say function of tmp object.");
        };

        var tmpObj = new MyTmpObject('TEST', 26);
        console.dir(tmpObj);

        var tmpStr = 'test';
        console.dir(tmpStr);

        // console.time()
        var fs = require('fs');

        const TMP_TAG = 'ReadFileTime';
        console.time(TMP_TAG);
        var content = fs.readFileSync('./app.js', 'utf-8');
        console.log('File Content:\n' + content);
        console.timeEnd(TMP_TAG);

        // console.assert()
        console.assert(1 === 1, 'if false, send message.');
    })();
}


// #2, path
var isPathDemoRun = false;
if (isPathDemoRun) {
    (function () {
        var path = require('path');

        var curDirName = path.basename(__dirname);
        var curFileName = path.basename(__filename);
        console.log('Current directory name:', curDirName);
        console.log('File name:', curFileName);

        console.log(path.isAbsolute(__dirname));
        console.log(path.isAbsolute(curDirName));

        console.log('Current path:', path.join(__dirname, curFileName));

        console.log('%s file type: %s', curFileName, path.extname(curFileName));

        console.log(__filename.split(path.sep));
    })();
}


// #3, util
var isUtilDemoRun = false;
if (isUtilDemoRun) {
    (function () {
        var util = require('util');

        console.log('INSPECT:', util.inspect(util));
        console.dir('DIR:', util);

        console.log(util.format('Hello, %s:%s', 'ZHENG', 'JIN'));
        console.log('Hello, %s:%s', 'ZHENG', 'JIN');

        console.log('isArray:', util.isArray(['java', 'javascript']));
        console.log('isRegExp:', util.isRegExp(/\d+/));

        console.log('isError:', util.isError(new Error()));
        console.log('isError:', util.isError(new TypeError()));
    })();
}


// #4, url
// http://www.cnblogs.com/qiuzhimutou/p/4793231.html
var isUrlDemoRun = false;
if (isUrlDemoRun) {
    (function () {
        var url = require('url');

        // url.parse()
        var testUrl = 'http://localhost:8888/select?aa=001&bb=002';
        var tmpParseUrl = url.parse(testUrl);

        console.log(tmpParseUrl);

        console.log('href:', tmpParseUrl.href);
        console.log('protocol:', tmpParseUrl.protocol);
        console.log('host:', tmpParseUrl.host);
        console.log('hostname:', tmpParseUrl.hostname);
        console.log('port #:', tmpParseUrl.port);
        console.log('path:', tmpParseUrl.path);
        console.log('pathname:', tmpParseUrl.pathname);
        console.log('Query string:', tmpParseUrl.query);

        console.log('Query object', url.parse(testUrl, true).query);

        // url.resolve()
        console.log(url.resolve('http://imooc.com/', '/course/list'));

        // url.format()
        var tmpUrlObj = { protocol: 'http:',
            slashes: true,
            auth: null,
            host: 'www.imooc.com',
            port: null,
            hostname: 'www.imooc.com',
            hash: null,
            search: null,
            query: null,
            pathname: '/video/6710',
            path: '/video/6710',
            href: 'http://www.imooc.com/video/6710' };
        console.log(url.format(tmpUrlObj));
    })();
}


console.log(__filename, 'Done!');
// end
