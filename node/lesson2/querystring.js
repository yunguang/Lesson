/**
 * Created by 57450 on 2017/5/19.
 */
const querystring=require('querystring');
// console.log(querystring.stringify({ w: 'wo', foo: 'bar' }));
// console.log(querystring.stringify({ w: 'wo', foo: 'bar' },','));
// console.log(querystring.stringify({ w: 'wo', foo: 'bar' },',','*'));

// console.log(querystring.parse('name=zhou&age=10'));
// console.log(querystring.parse('name=zhou,age=10',','));
// console.log(querystring.parse('name:zhou,age:10',',',':'));

console.log(querystring.escape('<啦啦>&='));