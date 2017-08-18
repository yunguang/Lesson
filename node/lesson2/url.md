### url的方法

 1. url.parse()
    1. 第一个参数是一个url字符串，作用是将url字符串转化为url地址
    
    2. 第二个参数是一个boolean类型，默认是false,可以不写，如果是true，会把url对象的query转化为对象
    
    3. 第三个参数是一个boolean类型，默认是false,可以不写，如果是true,在没有协议的前提下正确解析url
    
    ```
    const url=require('url');
    let str='//www.baidu.com:8080?name=zhouyg&age=20#1';
    console.log(url.parse(str,true));
    let res1={
        protocol: null,
            slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: '#1',
        search: '?name=zhouyg&age=20',
        query: { name: 'zhouyg', age: '20' },
        pathname: '//www.baidu.com:8080',
            path: '//www.baidu.com:8080?name=zhouyg&age=20',
        href: '//www.baidu.com:8080?name=zhouyg&age=20#1' };
    
    console.log(url.parse(str,true,true));
    let res2={
        protocol: null,
        slashes: true,
        auth: null,
        host: 'www.baidu.com:8080',
        port: '8080',
        hostname: 'www.baidu.com',
        hash: '#1',
        search: '?name=zhouyg&age=20',
        query: { name: 'zhouyg', age: '20' },
        pathname: null,
        path: '?name=zhouyg&age=20',
        href: '//www.baidu.com:8080?name=zhouyg&age=20#1' }
    ```
    
    
 
 2. url.format()
 
    1. 作用是将url对象转化为url字符串 
 
 3. url.resolve()
 
    1. 作用是将url地址和路径连接起来
 
### url对象的属性

```
const url=require('url');
let str='http://user:zhouyg@www.baidu.com:8080?name=zhouyg&age=20#1';
console.log(url.parse(str));
let str1={
    protocol: 'http:',
    slashes: true,
    auth: 'user:zhouyg',
    host: 'www.baidu.com:8080',
    port: '8080',
    hostname: 'www.baidu.com',
    hash: '#1',
    search: '?name=zhouyg&age=20',
    query: 'name=zhouyg&age=20',
    pathname: '/',
    path: '/?name=zhouyg&age=20',
    href: 'http://user:zhouyg@www.baidu.com:8080/?name=zhouyg&age=20#1' };
```

 1. protocal 协议
 
 2. slashes 是否有斜杠
 
 3. auth  授权用户信息
 
 4. host  主机
 
 5. hostname  主机名
 
 6. port  端口号
 
 7. path  路径（没有查询字符串）
 
 8. pathname 路径名
 
 9. hash  哈希值
 
 10. search  带问号的查询字符串
 
 11. query  查询字符串
 
 12. href  url字符串
 
 