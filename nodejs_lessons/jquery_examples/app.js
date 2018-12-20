/**
 * Created by Vieira on 2017/4/17.
 *
 * JQuery demos.
 */

var fs = require('fs');
var cheerio = require('cheerio');


const separatorLine = '---------------------------';

var getTextOfDomObject = function (domObject) {
    return domObject.children[0].data;
};

var isJqueryObject = function (tmpObject) {
    return Boolean(tmpObject.options);
};

var testFindById = function ($) {
    var tmpDiv = $('#div_test1');
    console.log('html:', tmpDiv.html());

    // jquery object => dom object
    var divDom = tmpDiv.get(0);
    console.log('is jquery object:', isJqueryObject(divDom));
    console.log('text from dom object:', getTextOfDomObject(divDom));

    // dom object => jquery object
    var divJqObject = $(divDom);
    console.log('is jquery object:', isJqueryObject(divJqObject));
    console.log('text from jquery object:', divJqObject.text());
    console.log(separatorLine);
};

var testFindByClass = function ($) {
    var tmpDiv = $('div.green');
    console.log('inner html:', tmpDiv.html());
    console.log(separatorLine);
};

var testFindByProperty = function ($) {
    var tmpLang = $('div#div_test3 li[name=haskell]');
    console.log('css selector by property name:', tmpLang.text());
    console.log(separatorLine);
};

var testFindByLevels = function ($) {
    // parent => children
    var tmpLiJs1 = $('div#div_test2 li.lang-javascript');
    console.log('child text:', tmpLiJs1.text());

    // parent => 1 level children
    var tmpLiJs2 = $('ul.lang>li.lang-javascript');
    console.log('child text:', tmpLiJs2.text());

    // filter
    var tmpLiLua = $('div#div_test2>ul.lang>li:last-child');
    console.log('last child text:', tmpLiLua.text());

    var tmpLiPy = $('div#div_test2>ul.lang>li:nth-child(2)');
    console.log('child text at position 2:', tmpLiPy.text());
    console.log(separatorLine);
};

var testFindFromJqObject = function ($) {
    var tmpLangUl = $('div#div_test3>ul.lang');

    // find()
    var swf = tmpLangUl.find('#swift');
    console.log('by id, language text:', swf.text());

    var hsk = tmpLangUl.find('[name=haskell]');
    console.log('by name, language text:', hsk.text());

    // parent()
    var js = hsk.parent().find('.js');
    console.log('from parent, language text:', js.text());

    // next() and prev()
    var sch = swf.next();
    console.log('by next, language text:', sch.text());
    var py = swf.prev();
    console.log('by prev, language text:', py.text());
    console.log(separatorLine);
};

var testIteratorForJqArrays = function ($) {
    var tmpLangLis = $('div#div_test3>ul.lang li');

    // get jquery object from jquery array
    var idx = 2;
    var swfObject = tmpLangLis.eq(idx);
    console.log('language at position', idx, swfObject.text());

    // get dom object from jquery array
    var swfDomObject = tmpLangLis.get(idx);
    console.log('language at position', idx, getTextOfDomObject(swfDomObject));

    // each
    tmpLangLis.each(function (idx) {
        console.log('language:', getTextOfDomObject(this), 'at position:', idx);
    });

    tmpLangLis.each(function (idx, element) {
        console.log('language:', $(element).text(), 'at position:', idx);
    });
    console.log(separatorLine);
};

var testFilterForJqArray = function ($) {
    var tmpLangLis = $('div#div_test3>ul.lang>li');

    // filter
    var swf = tmpLangLis.filter('#swift');
    console.log('language swift:', swf.text());

    var tmpLanguages = tmpLangLis.filter(function () {
        return getTextOfDomObject(this).indexOf('S') === 0;
    });
    console.log('language start with S at 1st:', tmpLanguages.first().text());
    console.log('language start with S at 2nd:', getTextOfDomObject(tmpLanguages.get(1)));

    // map
    var tmpArr = tmpLangLis.map(function () {
        return $(this).text();
    }).get();
    console.log('Languages:', tmpArr);
    console.log(separatorLine);
};

var testGetJqObjectAttrVal = function ($) {
    var tmpLanguages = $('div#div_test3>ul>li');
    var tmpLang = tmpLanguages.filter(function () {
        return $(this).text() === 'Haskell';
    });
    console.log('is jquery object:', isJqueryObject(tmpLang));
    console.log('Haskell name attribute value:', tmpLang.attr('name'));
    console.log(separatorLine);
};


if (require.main === module) {

    var content = fs.readFileSync('./html_template.html', 'utf8');
    $ = cheerio.load(content);

    testFindById($);
    testFindByClass($);
    testFindByProperty($);
    testFindByLevels($);
    testFindFromJqObject($);
    testIteratorForJqArrays($);
    testFilterForJqArray($);
    testGetJqObjectAttrVal($);

    console.log('JQuery demo done!');
}
