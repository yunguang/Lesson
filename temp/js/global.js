/// <reference path="jquery.min.js" />
(function () {
    if (document.head.getAttribute("data-hasMobile") !== "false") {
        window.addEventListener("resize", function fn() {
            var deviceType = function () {
                var r = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios|BlackBerry|IEMobile|MQQBrowser)/i);
                return r ? r[0] : "Desktop";
            }();
            var isMobile = deviceType != "Desktop";

            if (isMobile) {
                location.href = location.href.replace("huosu.com", "huosu.com/m");
            }
            return fn;
        }());
    }
})();

$(function () {
    document.head.innerHTML += ('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />');

    //return;
    //var str = "<link href='http://yunfan.huosu.com/customer/huosu/navBarStyle/global.css' rel='stylesheet' />";
    var str = "";
    str += '    <div class="navBarFrame">' +
        '        <div class="logoFrame">' +
        '            <div class="container">' +
        '                <div class="telphone"><span>售前咨询</span>010-53673865 | 53663097</div>' +
        '                <a href="https://console.huosu.com/cloud/index.php?c=login" class="btnLogin">火速云登录</a>' +
        '            </div>' +
        '        </div>' +
        '        <div class="navFrame">' +
        '            <div class="container">' +
        '                <div class="logo"></div>' +
        '<div class="navItemsFrame">' +
        '                <a href="index.html" class="item">首页</a>' +
        '                <a href="javascript:void(0);" class="item">' +
        '                    解决方案' +
        '                    <div>' +
        '                        <ul>' +
        '                            <li onclick="location.href = \'medical.html\';">医疗行业解决方案</li>' +
        '                            <li onclick="location.href = \'entertainment.html\';">文娱行业解决方案</li>' +
        '                            <li onclick="location.href = \'edu.html\';">教育行业解决方案</li>' +
        '                            <li onclick="location.href=\'goods.html\';">快消行业解决方案</li>' +
        '                            <li onclick="location.href = \'https://console.huosu.com/cloud/index.php?c=login\';">中小企业移动解决方案</li>' +
        '                        </ul>' +
        '                        <ul style="float:right;border:none;">' +
        '                            <li onclick="location.href = \'storeMobile.html\';">门店移动化</li>' +
        '                            <li onclick="location.href = \'marketingMobile.html\';">营销自动化</li>' +
        '                            <li onclick="location.href = \'itMobile.html\';">IT移动化</li>' +
        //'                            <li onclick="location.href = \'dataMobile.html\';">数据信息移动化</li>' +
        //'                            <li onclick="location.href = \'servicesMobile.html\';">服务场景移动化</li>' +
        '                        </ul>' +
        '                    </div>' +
        '                </a>' +
        '                <a href="javascript:void(0);" class="item">' +
        '                    产品与服务' +
        '                    <div style="width:180px;left:0;">' +
        '                        <ul style="border:none;width:calc(100% - 20px);">' +
        '                            <li style="width:100%;padding:0;margin:0;padding-left:10px;padding-right:10px;" onclick="location.href = \'http://yunfan.huosu.com\';">云帆-H5产品中心</li>' +
        '                            <li style="width:100%;padding:0;margin:0;padding-left:10px;padding-right:10px;" onclick="location.href = \'cloud.html\';">火速云-小程序Saas平台</li>' +
        '                            <li style="width:100%;padding:0;margin:0;padding-left:10px;padding-right:10px;" onclick="location.href = \'wui.html\';">WUI-前端开发框架</li>' +
        '                        </ul>' +
        '                    </div>' +
        '                </a>' +
        '                <a href="case.html" class="item">案例展示</a>' +
        '                <a href="proxy.html" class="item">合作加盟</a>' +
        '                <a href="template.html" class="item">模板</a>' +
        '                <a href="contactUs.html" class="item" style="margin:0;">联系我们</a>' +
        '            </div>' +
        '</div>' +
        '        </div>' +
        '    </div>';

    var footer = '    <div class="bottomInfoFrame">' +
        '        <div class="container">' +
        '            <div class="title1">关于我们</div>' +
        '            <ul class="aboutUs">' +
        '                <li><a href="http://huosu.com/aboutUs/index.html">企业介绍</a></li>' +
        '                <li><a href="http://huosu.com/aboutUs/team.html">团队介绍</a></li>' +
        '                <li><a href="http://huosu.com/aboutUs/joinUs.html">加入我们</a></li>' +
        '                <li><a href="http://huosu.com/aboutUs/statement.html">免责声明</a></li>' +
        '            </ul>' +
        '            <div class="title2">合作加盟</div>' +
        '            <ul class="join">' +
        '                <li><a href="cooperation.html">商务合作</a></li>' +
        '                <li><a href="proxy.html">代理加盟</a></li>' +
        '            </ul>' +
        '            <div class="title3">行业资讯</div>' +
        '            <ul class="infos">' +
        '                <li><a href="dynamic.html">公司动态</a></li>' +
        '                <li><a href="information.html">行业资讯</a></li>' +
        '                <li><a href="media.html">媒体报道</a></li>' +
        '            </ul>' +
        '            <div class="title4">火速移动官方微信</div>' +
        '            <div class="qrcode1"></div>' +
        '            <div class="title5">扫码加入蜂鸟社区</div>' +
        '            <div class="qrcode2"></div>' +
        '            <div class="line"></div>' +
        '            <div class="title6">友情连接</div>' +
        '            <ul class="links">' +
        '                <li><a target="_blank" href="http://weixin1024.cn">开发者社区</a></li>' +
        '                <li><a target="_blank" href="http://www.chuangxin.com">创新工场</a></li>' +
        '                <li><a target="_blank" href="https://www.talkingdata.com">Talking Data</a></li>' +
        '                <li><a target="_blank" href="http://www.layabox.com">LayaBox</a></li>' +
        '                <li><a target="_blank" href="https://www.wilddog.com">野狗</a></li>' +
        '                <li><a target="_blank" href="https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN">微信公众平台</a></li>' +
        '                <li><a target="_blank" href="https://open.weixin.qq.com/">微信开放平台</a></li>' +
        '                <li><a target="_blank" href="https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F">微信支付平台</a></li>' +
        '                <li><a target="_blank" href="http://weixin.qq.com">微信</a></li>' +
        '            </ul>' +
        '            <div class="copyright">Copyright © 2013-2016, Huosu MoBi Technology Co,.Ltd. All rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京ICP备11015456号-7</div>' +
        '        </div>' +
        '    </div>';

    if ($(".about_footer").length >= 1) {
        $(".about_footer").html(footer);
        $(".about_container").css({ top: "122px", height: "calc(100% - 122px)" });
    } else {
        str += footer;
    }

    document.body.innerHTML += str;

    setTimeout(function () {
        $(".navBarFrame .navFrame .item").eq($(document.body).attr("data-navIndex")).addClass("active");
    }, 100);
});
