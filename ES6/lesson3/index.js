
// var express = require("express")
// var request = require("request")
// var app = express()
// var port = 8080
// app.listen(port, function () {
//     console.log("servar ok!");
// })
//
// var config = {
//     appID: "wx71d1a29478879e89",
//     appsecret: "a0f1267e704d45aa078fd21df178ba3b",
//     token: "wechatdemo",
//     redirectUri: "http://qo17033986.iok.la:10489/callback",
//     scope: "snsapi_userinfo"
// }
//
// /*
//  * 微信授权分为三步： 获取code ==> 用code获取access_token ==> 用access_token获取用户信息
//  * 1：重定向到确认授权页面获取code信息,当用户点击确认授权后会将code信息带到回调地址的字符串参数中。
//  * 2：在回调地址路由中获取code信息，使用code、appID、appsecret信息,请求接口获得access_token 与 openid。
//  * 3：使用access_token 与 openid 请求接口获取用户信息。
//  */
//
// //1.重定向确认授权页面 获取code信息
// app.get("/wechat", function (req, res) {
//     var options = {
//         url: "https://open.weixin.qq.com/connect/oauth2/authorize?"
//         + "appid=" + config.appID
//         + "&redirect_uri="+encodeURIComponent(config.redirectUri)
//         + "&response_type=code"
//         + "&scope=" + config.scope
//         + "&state=2#wechat_redirect"
//     }
//     res.redirect(options.url);
// })
//
// app.get("/callback", function (req, res) {
//     var code = req.query.code;
//     var options = {
//         url: "https://api.weixin.qq.com/sns/oauth2/access_token?"
//         + "appid=" + config.appID
//         + "&secret=" + config.appsecret
//         + "&code=" + code
//         + "&grant_type=authorization_code"
//     }
//     //2.获取access_token与openid接口
//     request({ url: options.url }, function (err, re, body) {
//
//         body = JSON.parse(body);
//         //得到access_token 与 openid
//         var openid = body.openid;
//         var accessToken = body.access_token;
//
//         //验证access_token是否有效接口
//         //request({ url: "https://api.weixin.qq.com/sns/auth?access_token="+accessToken+"&openid="+openid }, function (err, res, body) {
//         //        console.log(body)
//         //})
//
//         var options = {
//             url: "https://api.weixin.qq.com/sns/userinfo?"
//             + "access_token=" + accessToken
//             + "&openid=" + openid
//             + "&lang=zh_CN"
//         };
//         //3.使用access_token拉取用户信息
//         request({ url: options.url }, function (err,re,body) {
//             console.log(body);
//             res.send(body);
//         })
//     })
// });


function getAccessToken(req) {
    return new Promise(function (resolve, reject) {
        console.log(req.session);
        if (req.session.access_token && req.session.expires_in > Date.now()) {
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
                    req.session.expires_in = Date.now()+7200
                    console.log(req.session)
                    resolve(body.access_token)
                } else {
                    reject(err);
                }
            })
        }
    });
}