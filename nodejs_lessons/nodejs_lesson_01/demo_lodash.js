/**
 * Created by zhengjin on 2017/4/14.
 * 
 * Docs: 
 * https://lodash.com/docs/
 */

var _ = require('lodash');

if (require.main === module) {

    var users = [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'pebbles', 'age': 1 }
    ];

    var youngest = _.chain(users)
        .sortBy('age')
        .map(function (chr) {
            return chr.user + ' is ' + chr.age;
        })
        .first()
        .value();
    console.log('youngest:', youngest);

    console.log(__filename, 'Done!');
}
