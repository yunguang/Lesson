var cityData = require('../../../../utils/citydata.js');
Page({
    data: {
        cities: ["北京", "上海", "重庆", "深圳", "河北"],
        types:['互联网','教育','科技','医疗','农业','工业'],
        typeIndex:0,
        isChooseType:false,
        isChooseCity:false,
        chooseArr:null,
        lists:null,
        //以下是三级联动组件
        citysData: cityData.citysData,
        provinces: [],
        citys: [],
        areas: [],
        value: [0, 0, 0],
        name: '',
        isShow: false
    },
    onLoad: function (options) {
        this.initData();

    },
    initData: function () {
        var provinces = [];
        var citys = [];
        var areas = [];

        this.data.citysData.forEach(function (province, i) {
            provinces.push(province.name);
            if (i === 0) {
                citys.push(province.citys[i].name);
                areas = province.citys[i].areas;
            }
        });

        this.setData({
            provinces: provinces,
            citys: citys,
            areas: areas
        });
    },

    bindChange: function (e) {
        var citysData = this.data.citysData;
        var value = this.data.value;
        var current_value = e.detail.value;
        var citys = [];

        var provinceObj = {};
        var cityObj = {};

        provinceObj = citysData[current_value[0]];

        if (value[0] !== current_value[0]) {
            // 滑动省份
            provinceObj.citys.forEach(function (v) {
                citys.push(v.name);
            });
            this.setData({
                citys: citys
            });

            cityObj = provinceObj.citys[0];

            this.setData({
                areas: cityObj.areas,
                value: [current_value[0], 0, 0]
            });

        } else if (value[0] === current_value[0] && value[1] !== current_value[1]) {
            // 滑动城市
            if (current_value[1] >= provinceObj.citys.length) {
                // 数据不存在 跳过
                return;
            }
            cityObj = provinceObj.citys[current_value[1]];
            this.setData({
                areas: cityObj.areas,
                value: [current_value[0], current_value[1], 0]
            });
        } else {
            // 滑动区县
            cityObj = provinceObj.citys[current_value[1]];
            this.setData({
                value: current_value
            });
        }
        console.log(cityObj.areas[this.data.value[2]]);
        this.setData({
            isChooseCity:true,
            name: provinceObj.name + '-' + cityObj.name + '-' + cityObj.areas[this.data.value[2]]
        });
    },
    onBoxTap: function (e) {
        console.log(e);
        if (e.target.dataset.show) {

        } else {
            this.setData({
                isShow: false
            })
        }
    },
    onCancelTap: function () {
        this.setData({
            isShow: false
        })
    },
    onConfirmTap: function () {
        var areas=this.data.areas;
        console.log(areas);
        console.log(this.data.value[2]);
        console.log(areas[this.data.value[2]]);
        this.setData({
            isChooseCity: true,
            isShow: false
        })
    },
    onCityTap:function(){
        this.setData({
            isShow:true
        })
    },
    //按行业
    bindTypeChange:function(e){
        this.setData({
            typeIndex:e.detail.value,
            isChooseType:true
        })
    },
    //点击搜索
    onSearchTap:function(){
        var lists = [
            {
                content: "东直门银座一楼底层商品200店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",
            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品210店铺",

            },
            {
                content: "东直门银座一楼底层商品280店铺",
            },
        ]
        this.setData({
            lists: lists
        })
    },
    onListTap:function(e){
        console.log(e);
        var index=e.currentTarget.dataset.index;
        var lists=this.data.lists;
        if (!lists[index].checked ){
            lists[index].checked=false;
        }
        lists[index].checked = !lists[index].checked;
        this.setData({
            lists:lists
        })
    },

    onPublishTap:function(){
        var lists = this.data.lists;
        var chooseArr = null;
        chooseArr=lists.filter(function(item){
            return item.checked;
        })
        console.log(chooseArr);
        this.setData({
            chooseArr: chooseArr
        })
        wx.redirectTo({
            url: '../package-management?chooseArr=' + JSON.stringify(chooseArr),
        })
    }



})