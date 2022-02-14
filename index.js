import _ from 'lodash';
import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format('MMM Do YY'));
console.log(moment('2020-01-01').isValid());
console.log(moment('2020-14-01').isValid());

console.log(moment().add(7, 'd'));
console.log(moment().add(7, 'M'));
console.log(moment().add(7, 'y'));
console.log(moment().subtract(7, 'd'));
console.log(moment().subtract(7, 'M'));
console.log(moment().subtract(7, 'y'));

var a = moment([2014, 11, 11]);
var b = moment([2015, 9, 11]);
a.diff(b, 'days');

var a = moment([2014, 11, 27]);
var b = moment([2015, 9, 16]);
a.diff(b, 'days');

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

//lodash

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
console.log(
  _.fromPairs([
    ['a', 1],
    ['b', 2],
  ])
);
console.log(_.map(['6', '8', '10'], _.ary(parseInt, 1)));

var objects = [{ a: 1 }, { b: 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);

console.log(_.isString('abc'));
