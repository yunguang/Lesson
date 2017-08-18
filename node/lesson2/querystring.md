### querystring模块的四个方法

 1. querystring.string(obj[, sep[, eq[, options]]]) 将对象转化为查询字符串
 
```
console.log(querystring.stringify({ w: 'wo', foo: 'bar' }));
console.log(querystring.stringify({ w: 'wo', foo: 'bar' },','));
console.log(querystring.stringify({ w: 'wo', foo: 'bar' },',','*'));
```
 
 2. querystring.parse(str[, sep[, eq[, options]]]) 将查询字符串转化为对象
```
console.log(querystring.parse('name=zhou&age=10'));
console.log(querystring.parse('name=zhou,age=10',','));
console.log(querystring.parse('name:zhou,age:10',',',':'));
```
 3. querystring.escape()  编码（相当于encodeURIComponent）
 ```
 console.log(querystring.escape('<啦啦>&='));
 ```
 
 4. querystring.unescape()  解码 （相当于decodeURIComponent）
  ```
  console.log(querystring.unescape('%3C%E5%95%A6%E5%95%A6%3E%26%3D'));
  ```
 