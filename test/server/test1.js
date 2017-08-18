
var list=
    [{
        "sumPrice": 2000,
        "lotteryNum": 1000,
        "purchasingState": 2,
        "expressType": 0,
        "qRCodeImage": "D:\\apache-tomcat-8.5.14-windows-x64 (1)\\apache-tomcat-8.5.14\\webapps\\lottery-app\\WEB-INF\\1.png",
        "machineCommodityID": 0,
        "lotteryType": "1",
        "sumBalancePrice": 1000,
        "merchantName": "Mickey",
        "cityName": "北京",
        "merchantID": "10001",
        "lotteryPurchasingID": 1,
        "detailAddress": "东直门外大街1008",
        "orderDispatchTime": "2019-07-01 上午",
        "sumTencentPayPrice": 1000,
        "tel": "13810000100",
        "countyName": "东城区",
        "orderStartTime": 1496814690000
    }, {
        "sumPrice": 2000,
        "exprseeNumber": "10002003098",
        "lotteryNum": 1000,
        "purchasingState": 2,
        "expressType": 2,
        "qRCodeImage": "D:\\apache-tomcat-8.5.14-windows-x64 (1)\\apache-tomcat-8.5.14\\webapps\\lottery-app\\WEB-INF\\3.png",
        "machineCommodityID": 0,
        "lotteryType": "1",
        "sumBalancePrice": 1000,
        "merchantName": "Mickey",
        "expressName": "圆通",
        "cityName": "北京",
        "merchantID": "10001",
        "lotteryPurchasingID": 3,
        "detailAddress": "东直门外大街1008",
        "sumTencentPayPrice": 1000,
        "tel": "13810000100",
        "countyName": "东城区",
        "orderStartTime": 1496825038000
    }, {
        "sumPrice": 2000,
        "lotteryNum": 1000,
        "purchasingState": 1,
        "expressType": 0,
        "machineCommodityID": 0,
        "lotteryType": "1",
        "sumBalancePrice": 0,
        "merchantName": "Mickey",
        "cityName": "北京",
        "merchantID": "10001",
        "lotteryPurchasingID": 4,
        "detailAddress": "东直门外大街1008",
        "sumTencentPayPrice": 0,
        "tel": "13810000100",
        "countyName": "东城区",
        "orderStartTime": 1496825706000
    }, {
        "sumPrice": 2000,
        "lotteryNum": 1000,
        "purchasingState": 1,
        "expressType": 0,
        "machineCommodityID": 0,
        "lotteryType": "1",
        "sumBalancePrice": 0,
        "merchantName": "Mickey",
        "cityName": "北京",
        "merchantID": "10001",
        "lotteryPurchasingID": 5,
        "detailAddress": "东直门外大街1008",
        "orderDispatchTime": "2019-07-01 上午",
        "sumTencentPayPrice": 0,
        "tel": "13810000100",
        "countyName": "东城区",
        "orderStartTime": 1496825911000
    }, {
        "sumPrice": 2000,
        "lotteryNum": 1000,
        "purchasingState": 1,
        "expressType": 0,
        "machineCommodityID": 0,
        "lotteryType": "1",
        "sumBalancePrice": 0,
        "merchantName": "Mickey",
        "cityName": "北京",
        "merchantID": "10001",
        "lotteryPurchasingID": 6,
        "detailAddress": "东直门外大街1008",
        "orderDispatchTime": "2019-07-01 上午",
        "sumTencentPayPrice": 0,
        "countyName": "东城区",
        "orderStartTime": 1497526611000
    }, {
        "sumPrice": 2000,
        "lotteryNum": 1000,
        "purchasingState": 1,
        "expressType": 0,
        "machineCommodityID": 0,
        "lotteryType": "1",
        "sumBalancePrice": 0,
        "merchantName": "Mickey",
        "cityName": "北京",
        "merchantID": "10001",
        "lotteryPurchasingID": 7,
        "detailAddress": "东直门外大街1008",
        "orderDispatchTime": "2019-07-01 上午",
        "sumTencentPayPrice": 0,
        "countyName": "东城区",
        "orderStartTime": 1497527105000
    }, {
        "sumPrice": 2000,
        "lotteryNum": 1000,
        "purchasingState": 1,
        "expressType": 0,
        "machineCommodityID": 0,
        "lotteryType": "1",
        "sumBalancePrice": 0,
        "merchantName": "Mickey",
        "cityName": "北京",
        "merchantID": "10001",
        "lotteryPurchasingID": 8,
        "detailAddress": "东直门外大街1008",
        "orderDispatchTime": "2019-07-01 上午",
        "sumTencentPayPrice": 0,
        "countyName": "东城区",
        "orderStartTime": 1497580120000
    }];
function isZero() {

}
function formatDate(list) {
    list.forEach(function(item){
        if(item&&item.orderDispatchTime){
            item.orderDispatchTime=item.orderDispatchTime.replace(/^\d{4}-(\d{2})-(\d{2})/,function () {
                var first=arguments[1].replace(/0(\d)/,'$1');
                var second=arguments[2].replace(/0(\d)/,'$1');
                return first+"月"+second+"日";
            });
        }
    })
}

formatDate(list);
console.log(list);