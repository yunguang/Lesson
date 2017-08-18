var express = require("express");
var path = require("path");
var sha1 = require("sha1");
var cookieParser = require('cookie-parser');
var request = require("request");
var ejs = require("ejs");
var session = require("express-session");
//var WeChatApi = require("./routers/WeChatApi")
var app = express();
var port = 20000;
app.listen(port, function () {
        console.log("server ok!");
});
app.use(cookieParser());
//设置session中间件
app.use(session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true
}));


//静态文件托管
app.use("/public", express.static(path.join(__dirname, "/public")));

//设置模板视图目录
app.set("views", path.join(__dirname, "views"));

//配置模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');


var config = {
        appID: "wx71d1a29478879e89",
        appsecret: "a0f1267e704d45aa078fd21df178ba3b",
        token: "wechatdemo",
        redirectUri: "http://qo17033986.iok.la:10489/weixin/callback",
        scope: "snsapi_userinfo"
};

function getAccessToken(req) {
        return new Promise(function (resolve, reject) {
                if (req.session.access_token && req.session.expires_in > Date.now()) {
                        console.log(1);
                        resolve(req.session.access_token);
                } else {
                        console.log("---------------请求access_token");
                        request({
                                url: "https://api.weixin.qq.com/cgi-bin/token"
                                        + "?grant_type=client_credential"
                                        + "&appid=" + config.appID
                                        + "&secret=" + config.appsecret
                        }, function (err, res, body) {
                                if (!err && (res.statusCode === 200)) {
                                        body = JSON.parse(body);
                                        req.session.access_token = body.access_token;
                                        req.session.expires_in = Date.now()+7200;
                                        console.log(req.session);
                                        resolve(body.access_token)
                                } else {
                                        reject(err);
                                }
                        })
                }
        });
}


/*
 * 接入微信公共平台
 */
app.get("/", function (req, res) {
        console.log(req.session.access_token+"......");
        //获取access_token
        getAccessToken(req)
                .then(function (accessToken) {
                        //console.log(accessToken)
                })
                .catch(function (err) {
                        //console.log(err)
                });

        res.send("yes");
        //将token、timestamp、nonce进行字典排序 与 signature进行匹配
        //var token = config.token,
        //timestamp = req.query.timestamp,
        //nonce = req.query.nonce,
        //signature = req.query.signature,
        //echostr = req.query.echostr;
        ////进行字典排序 并进行sha1加密
        //var newSignature = [token, timestamp, nonce].sort().join("");
        //newSignature = sha1(newSignature);

        //if (newSignature === signature) {
        //        res.send(echostr);
        //} else {
        //        res.send("Not Find")
        //}
});
app.get("/test", function (req, res) {

    req.session.username='周云广';
        res.send('get data');
});
app.get("/user", function (req, res) {
        console.log(req.session.username);
        res.send('get data');
});



//app.use("/weixin", WeChatApi);

//app.get("/jssdk", function (req, res) {
//        res.render("index", {})
//})



















