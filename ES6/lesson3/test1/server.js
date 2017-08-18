/**
 * Created by 57450 on 2017/4/25.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//var uuid = require('uuid');
var app = express();
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.set('views', __dirname);
app.use(require('cookie-parser')());

app.use(session({secret: 'zfpx',
    resave: true,
    saveUninitialized: true}));

/**
 * curl -v -H "cookie: username=customer" http://localhost:8080/user
 */

function checkUser(req, res, next) {
    if (req.session && req.session.username)
        next();
    else
        res.redirect('/');
}

//进入登录页
app.get('/', function (req, res) {
    res.send('index');
});

//登录
app.get('/login', function (req, res) {
    req.session.username = "123";
    console.log(req.session.username);
    res.redirect('/user');
});

//用户页面
app.get('/user', function (req, res) {
    console.log(req.session.username);
    res.send('user');
});

//用户退出
app.get('/logout', function (req, res) {
    req.session.usrename = null;
    res.redirect('/');
});


app.listen(8080);