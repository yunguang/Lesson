/**
 * Created by 57450 on 2017/5/19.
 */
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

// let str1={
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:zhouyg',
//     host: 'www.baidu.com:8080',
//     port: '8080',
//     hostname: 'www.baidu.com',
//     hash: '#1',
//     search: '?name=zhouyg&age=20',
//     query: 'name=zhouyg&age=20',
//     pathname: '/',
//     path: '/?name=zhouyg&age=20',
//     href: 'http://user:zhouyg@www.baidu.com:8080/?name=zhouyg&age=20#1' };
// console.log(url.format(str1));
// protocal  slashes auth  host hostname  port hash search  query pathname  path

console.log(url.resolve('baidu.com','name/age'));