
// 1.开通微信支付和微信商户号

// 2.获取用户的openid
// 调用wx.login方法，可以得到用户的code,然后开发者服务器使用登录凭证code获取openid

  wx.login({
     success:function (res) {
         if(res.code){
             wx.request({
                 url:"https://yourwebsit/onLogin",
                 method:"POST",
                 data:{
                     code:res.code
                 },
                 success:function (res) {
                     var openid=res.data.openid;
                 },
                 fail:function (res) {

                 },
                 complete:function (res) {
                     
                 }
             })
         }
     }
  });

function jsApiCall() {
    WeixinJSBridge.invoke("getBrandWCPayRequest",{
        "appid":"",
        "timeStamp":"",
        "nonceStr":"",
        "package":"prepay_id=<%=prepay_id%>",
        "signType":"MD5",
        "paySign":"<%=paySignjs%>"

    },function (res) {
       WeixinJSBridge.log(res.err_msg);
        if(res.err_msg=="get_brand_wcpay_request:ok"){
            alert("支付成功！");
        }else{
            alert("支付失败！")
        }
    })
}

